import {
  Compass,
  Shield as ShieldIcon,
  Feather,
  BookOpen,
  Globe2,
  Hammer,
  Flower2,
} from "lucide-react";

const variants = {
  // navy shield with gold icon
  navy: { fill: "hsl(217 80% 13%)", stroke: "hsl(46 65% 52%)", icon: "hsl(46 65% 52%)" },
  // crimson shield with gold icon
  crimson: { fill: "hsl(353 80% 38%)", stroke: "hsl(46 65% 52%)", icon: "hsl(46 65% 52%)" },
} as const;

const map: Record<string, { variant: keyof typeof variants; Icon: any }> = {
  waymark: { variant: "navy", Icon: Compass },
  sanctum: { variant: "crimson", Icon: ShieldIcon },
  scriptorium: { variant: "navy", Icon: Feather },
  lyceum: { variant: "crimson", Icon: BookOpen },
  gatehouse: { variant: "navy", Icon: Globe2 },
  guildhall: { variant: "crimson", Icon: Hammer },
  consortium: { variant: "navy", Icon: Flower2 },
};

interface Props {
  slug: string;
  size?: number;
  className?: string;
}

export function ProgrammeShield({ slug, size = 96, className = "" }: Props) {
  const cfg = map[slug] ?? map.waymark;
  const v = variants[cfg.variant];
  const Icon = cfg.Icon;

  return (
    <div className={`relative inline-flex ${className}`} style={{ width: size, height: size * 1.15 }}>
      <svg
        viewBox="0 0 100 115"
        className="absolute inset-0 h-full w-full drop-shadow-[0_8px_24px_rgba(7,29,59,0.25)]"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={`g-${slug}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={v.fill} stopOpacity="1" />
            <stop offset="100%" stopColor={v.fill} stopOpacity="0.85" />
          </linearGradient>
        </defs>
        <path
          d="M50 2 L96 14 L96 58 C96 84 76 104 50 113 C24 104 4 84 4 58 L4 14 Z"
          fill={`url(#g-${slug})`}
          stroke={v.stroke}
          strokeWidth="3"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center -mt-1">
        <Icon style={{ color: v.icon }} className="h-1/2 w-1/2" strokeWidth={1.7} />
      </div>
    </div>
  );
}
