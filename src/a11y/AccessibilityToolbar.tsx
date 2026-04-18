import { useEffect, useRef, useState } from "react";
import { useA11y } from "./AccessibilityProvider";
import { Accessibility, Type, Contrast, Pause, BookOpen, Palette, RotateCcw, X } from "lucide-react";

function Row({ icon: Icon, label, children }: { icon: React.ElementType; label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-4 py-3 border-b border-border last:border-b-0">
      <div className="flex items-center gap-2.5 min-w-0">
        <Icon className="h-4 w-4 text-accent flex-shrink-0" aria-hidden="true" />
        <span className="text-sm font-semibold">{label}</span>
      </div>
      <div className="flex-shrink-0">{children}</div>
    </div>
  );
}

function Toggle({ on, onClick, labelOn = "On", labelOff = "Off" }: { on: boolean; onClick: () => void; labelOn?: string; labelOff?: string }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      onClick={onClick}
      className={`px-3 py-1 text-xs font-semibold rounded-md border-2 ${
        on ? "bg-accent text-accent-foreground border-accent" : "bg-background text-foreground border-border hover:border-accent"
      }`}
    >
      {on ? labelOn : labelOff}
    </button>
  );
}

function PillGroup({ value, onChange, options }: { value: string; onChange: (v: string) => void; options: { value: string; label: string }[] }) {
  return (
    <div className="flex items-center gap-1" role="group">
      {options.map((opt) => {
        const active = opt.value === value;
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            aria-pressed={active}
            className={`px-2.5 py-1 text-xs font-semibold rounded-md border-2 ${
              active ? "bg-accent text-accent-foreground border-accent" : "bg-background text-foreground border-border hover:border-accent"
            }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}

export function AccessibilityToolbar() {
  const a = useA11y();
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  // Close on outside click + Escape
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(e.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="a11y-panel"
        aria-label="Accessibility options"
        className="flex items-center gap-2 bg-primary text-primary-foreground border-2 border-accent px-3 py-2 rounded-full shadow-md hover:bg-primary-glow"
      >
        <Accessibility className="h-5 w-5" aria-hidden="true" />
        <span className="hidden sm:inline text-xs font-semibold uppercase tracking-wider">
          Accessibility
        </span>
      </button>

      {open && (
        <div
          ref={panelRef}
          id="a11y-panel"
          role="dialog"
          aria-label="Accessibility options"
          className="absolute bottom-full mb-2 right-0 w-80 max-w-[calc(100vw-1.5rem)] bg-card text-card-foreground border-2 border-primary shadow-xl rounded-md overflow-hidden"
        >
          <div className="flex items-center justify-between px-4 py-3 bg-primary text-primary-foreground">
            <h2 className="font-display text-base text-primary-foreground">Accessibility</h2>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close accessibility panel"
              className="p-1 hover:text-accent"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="px-4">
            <Row icon={Type} label="Dyslexia font">
              <Toggle on={a.font === "dyslexia"} onClick={() => a.set("font", a.font === "dyslexia" ? "default" : "dyslexia")} />
            </Row>
            <Row icon={Contrast} label="High contrast">
              <Toggle on={a.contrast === "high"} onClick={() => a.set("contrast", a.contrast === "high" ? "default" : "high")} />
            </Row>
            <Row icon={Pause} label="Reduce motion">
              <Toggle on={a.motion === "reduced"} onClick={() => a.set("motion", a.motion === "reduced" ? "default" : "reduced")} />
            </Row>
            <Row icon={BookOpen} label="Reading guide">
              <Toggle on={a.readingGuide} onClick={() => a.set("readingGuide", !a.readingGuide)} />
            </Row>
            <Row icon={Type} label="Text size">
              <PillGroup
                value={String(a.size)}
                onChange={(v) => a.set("size", Number(v) as 0 | 1 | 2 | 3)}
                options={[
                  { value: "0", label: "A" },
                  { value: "1", label: "A+" },
                  { value: "2", label: "A++" },
                  { value: "3", label: "A+++" },
                ]}
              />
            </Row>
            <Row icon={Palette} label="Colour overlay">
              <PillGroup
                value={a.overlay}
                onChange={(v) => a.set("overlay", v as "none" | "yellow" | "blue" | "pink")}
                options={[
                  { value: "none", label: "Off" },
                  { value: "yellow", label: "Yel" },
                  { value: "blue", label: "Blu" },
                  { value: "pink", label: "Pnk" },
                ]}
              />
            </Row>
          </div>

          <div className="px-4 py-3 border-t border-border bg-secondary">
            <button
              type="button"
              onClick={a.reset}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-accent"
            >
              <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
              Reset all to default
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
