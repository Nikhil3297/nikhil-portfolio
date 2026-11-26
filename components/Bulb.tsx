// Glowing light bulb peeking in from the bottom-left corner of a section. Pass a unique `id` per instance (used by the SVG gradient).
const Bulb = ({ id }: { id: string }) => (
  <div
    className="absolute -left-20 -bottom-14 rotate-12 animate-pulse -z-10 w-50 xl:w-65 pointer-events-none select-none"
    aria-hidden
  >
    <svg viewBox="-20 -20 240 260" className="w-full h-full">
      <defs>
        <radialGradient id={id} cx="50%" cy="45%" r="50%">
          <stop offset="0%" stopColor="#fde047" stopOpacity="0.9" />
          <stop offset="40%" stopColor="#facc15" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#facc15" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="100" cy="92" r="110" fill={`url(#${id})`} />
      <path
        d="M70 134 A52 52 0 1 1 130 134 C124 144 121 150 121 158 V166 H79 V158 C79 150 76 144 70 134 Z"
        fill="rgb(255 255 255 / 0.5)"
        stroke="rgb(19 20 36 / 0.7)"
        strokeWidth="3"
      />
      <path d="M88 160 V128 l6 -10 l6 10 l6 -10 l6 10 V160" fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeLinejoin="round" />
      <rect x="79" y="171" width="42" height="8" rx="3" fill="rgb(19 20 36 / 0.7)" />
      <rect x="82" y="183" width="36" height="8" rx="3" fill="rgb(19 20 36 / 0.55)" />
      <path d="M90 195 H110 L105 204 H95 Z" fill="rgb(19 20 36 / 0.45)" />
    </svg>
  </div>
);

export default Bulb;
