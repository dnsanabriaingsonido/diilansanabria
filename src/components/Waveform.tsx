const BAR_COUNT = 48;

// Deterministic pseudo-random so SSR/CSR match
const seeded = (i: number) => {
  const x = Math.sin(i * 12.9898) * 43758.5453;
  return x - Math.floor(x);
};

const sinePath = (amp: number, freq: number) => {
  const pts: string[] = [];
  for (let x = 0; x <= 240; x += 4) {
    const y = 20 + Math.sin((x / 240) * Math.PI * 2 * freq) * amp;
    pts.push(`${x === 0 ? "M" : "L"}${x},${y.toFixed(2)}`);
  }
  return pts.join(" ");
};

const Waveform = () => {
  return (
    <div className="relative mt-16 max-w-xl h-28 select-none" aria-hidden="true">
      {/* Flowing sine layers */}
      <svg
        className="absolute inset-0 w-full h-full overflow-visible"
        viewBox="0 0 120 40"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="wave-fade" x1="0" x2="1">
            <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0" />
            <stop offset="35%" stopColor="hsl(var(--accent-glow))" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.15" />
          </linearGradient>
        </defs>
        {[
          { amp: 11, freq: 2, dur: "7s", op: 0.9, w: 0.7 },
          { amp: 7, freq: 3, dur: "5s", op: 0.5, w: 0.5 },
          { amp: 14, freq: 1, dur: "11s", op: 0.28, w: 0.4 },
        ].map((l, i) => (
          <g key={i} style={{ animation: `wave-scroll ${l.dur} linear infinite` }}>
            <path
              d={sinePath(l.amp, l.freq)}
              fill="none"
              stroke="url(#wave-fade)"
              strokeWidth={l.w}
              strokeOpacity={l.op}
              strokeLinecap="round"
              style={{ animation: `wave-breathe ${l.dur} ease-in-out infinite` }}
            />
          </g>
        ))}
      </svg>

      {/* Mirrored reactive bars */}
      <div className="absolute inset-0 flex items-center gap-[3px]">
        {Array.from({ length: BAR_COUNT }).map((_, i) => {
          const r = seeded(i);
          const scale = 0.35 + r * 0.65;
          return (
            <span
              key={i}
              className="flex-1 rounded-full origin-center"
              style={{
                height: `${18 + r * 62}%`,
                background:
                  "linear-gradient(to bottom, hsl(var(--accent-glow) / 0), hsl(var(--accent-glow) / 0.95), hsl(var(--accent) / 0))",
                animation: `bar-dance ${0.7 + (i % 7) * 0.19}s cubic-bezier(.4,0,.6,1) ${(i * 0.045).toFixed(2)}s infinite alternate`,
                ["--bar-scale" as string]: scale.toFixed(2),
              }}
            />
          );
        })}
      </div>

      {/* Center line + glow */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-accent/60 via-accent/20 to-transparent" />
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-40 h-24 blur-3xl rounded-full opacity-40 pointer-events-none"
        style={{ background: "var(--gradient-accent)" }} />
    </div>
  );
};

export default Waveform;
