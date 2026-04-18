import { useA11y } from "./AccessibilityProvider";
import { Type, Contrast, Pause, BookOpen, Palette, RotateCcw } from "lucide-react";

function PillGroup({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { value: string; label: string; title?: string }[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex items-center gap-1.5" role="group" aria-label={label}>
      <span className="sr-only">{label}</span>
      {options.map((opt) => {
        const active = opt.value === value;
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            aria-pressed={active}
            title={opt.title ?? opt.label}
            className={`px-2.5 py-1 text-xs font-semibold rounded-sm border ${
              active
                ? "bg-accent text-accent-foreground border-accent"
                : "bg-background text-foreground border-border hover:border-accent"
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

  return (
    <div className="w-full bg-primary text-primary-foreground border-b-4 border-accent">
      <div className="container-wide py-2">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          <span className="font-display tracking-wide text-xs uppercase opacity-80 mr-2">
            Accessibility
          </span>

          {/* 1. Dyslexia font */}
          <label className="flex items-center gap-2">
            <Type className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">Dyslexia font</span>
            <button
              type="button"
              role="switch"
              aria-checked={a.font === "dyslexia"}
              onClick={() => a.set("font", a.font === "dyslexia" ? "default" : "dyslexia")}
              className={`px-2 py-0.5 text-xs font-semibold rounded-sm border ${
                a.font === "dyslexia"
                  ? "bg-accent text-accent-foreground border-accent"
                  : "bg-transparent border-primary-foreground/40"
              }`}
            >
              {a.font === "dyslexia" ? "On" : "Off"}
            </button>
          </label>

          {/* 2. High contrast */}
          <label className="flex items-center gap-2">
            <Contrast className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">High contrast</span>
            <button
              type="button"
              role="switch"
              aria-checked={a.contrast === "high"}
              onClick={() => a.set("contrast", a.contrast === "high" ? "default" : "high")}
              className={`px-2 py-0.5 text-xs font-semibold rounded-sm border ${
                a.contrast === "high"
                  ? "bg-accent text-accent-foreground border-accent"
                  : "bg-transparent border-primary-foreground/40"
              }`}
            >
              {a.contrast === "high" ? "On" : "Off"}
            </button>
          </label>

          {/* 3. Reduce motion */}
          <label className="flex items-center gap-2">
            <Pause className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">Reduce motion</span>
            <button
              type="button"
              role="switch"
              aria-checked={a.motion === "reduced"}
              onClick={() => a.set("motion", a.motion === "reduced" ? "default" : "reduced")}
              className={`px-2 py-0.5 text-xs font-semibold rounded-sm border ${
                a.motion === "reduced"
                  ? "bg-accent text-accent-foreground border-accent"
                  : "bg-transparent border-primary-foreground/40"
              }`}
            >
              {a.motion === "reduced" ? "On" : "Off"}
            </button>
          </label>

          {/* 4. Reading guide */}
          <label className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">Reading guide</span>
            <button
              type="button"
              role="switch"
              aria-checked={a.readingGuide}
              onClick={() => a.set("readingGuide", !a.readingGuide)}
              className={`px-2 py-0.5 text-xs font-semibold rounded-sm border ${
                a.readingGuide
                  ? "bg-accent text-accent-foreground border-accent"
                  : "bg-transparent border-primary-foreground/40"
              }`}
            >
              {a.readingGuide ? "On" : "Off"}
            </button>
          </label>

          {/* 5. Text size */}
          <PillGroup
            label="Text size"
            value={String(a.size)}
            onChange={(v) => a.set("size", Number(v) as 0 | 1 | 2 | 3)}
            options={[
              { value: "0", label: "A" },
              { value: "1", label: "A+" },
              { value: "2", label: "A++" },
              { value: "3", label: "A+++" },
            ]}
          />

          {/* 6. Colour overlay */}
          <div className="flex items-center gap-2">
            <Palette className="h-4 w-4" aria-hidden="true" />
            <PillGroup
              label="Colour overlay"
              value={a.overlay}
              onChange={(v) => a.set("overlay", v as "none" | "yellow" | "blue" | "pink")}
              options={[
                { value: "none", label: "None" },
                { value: "yellow", label: "Yellow" },
                { value: "blue", label: "Blue" },
                { value: "pink", label: "Pink" },
              ]}
            />
          </div>

          <button
            type="button"
            onClick={a.reset}
            className="ml-auto inline-flex items-center gap-1.5 text-xs font-semibold underline-offset-2 hover:underline"
          >
            <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
