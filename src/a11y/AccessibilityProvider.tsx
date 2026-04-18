import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type FontMode = "default" | "dyslexia";
type Contrast = "default" | "high";
type Motion = "default" | "reduced";
type Overlay = "none" | "yellow" | "blue" | "pink";
type SizeStep = 0 | 1 | 2 | 3; // A, A+, A++, A+++

interface A11yState {
  font: FontMode;
  contrast: Contrast;
  motion: Motion;
  overlay: Overlay;
  size: SizeStep;
  readingGuide: boolean;
}

interface A11yContextValue extends A11yState {
  set: <K extends keyof A11yState>(key: K, value: A11yState[K]) => void;
  reset: () => void;
}

const DEFAULTS: A11yState = {
  font: "default",
  contrast: "default",
  motion: "default",
  overlay: "none",
  size: 0,
  readingGuide: false,
};

const SIZE_SCALE = [1, 1.125, 1.25, 1.4];

const A11yContext = createContext<A11yContextValue | null>(null);
const STORAGE_KEY = "reviveuk-a11y";

export function AccessibilityProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<A11yState>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return { ...DEFAULTS, ...JSON.parse(raw) };
    } catch {}
    return DEFAULTS;
  });

  useEffect(() => {
    const html = document.documentElement;
    html.dataset.a11yFont = state.font;
    html.dataset.a11yContrast = state.contrast;
    html.dataset.a11yMotion = state.motion;
    html.dataset.a11yOverlay = state.overlay;
    html.style.setProperty("--a11y-font-scale", String(SIZE_SCALE[state.size]));
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {}
  }, [state]);

  // Reading guide cursor tracking
  useEffect(() => {
    if (!state.readingGuide) {
      document.documentElement.style.setProperty("--reading-guide-y", "-100px");
      return;
    }
    const handler = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--reading-guide-y", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [state.readingGuide]);

  const set: A11yContextValue["set"] = (key, value) =>
    setState((s) => ({ ...s, [key]: value }));
  const reset = () => setState(DEFAULTS);

  return (
    <A11yContext.Provider value={{ ...state, set, reset }}>
      {children}
      {state.readingGuide && <div className="reading-guide-bar" aria-hidden="true" />}
    </A11yContext.Provider>
  );
}

export function useA11y() {
  const ctx = useContext(A11yContext);
  if (!ctx) throw new Error("useA11y must be used inside AccessibilityProvider");
  return ctx;
}
