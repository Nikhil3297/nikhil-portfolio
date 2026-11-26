import { HiArrowRight } from "react-icons/hi2";

const SIZE = 185;
const CENTER = SIZE / 2;

// Wavy, star-like ring drawn around the button.
const starRing = Array.from({ length: 80 }, (_, i) => {
  const radius = i % 2 === 0 ? 90 : 85;
  const angle = (Math.PI * i) / 40;
  return `${(CENTER + radius * Math.cos(angle)).toFixed(2)},${(CENTER + radius * Math.sin(angle)).toFixed(2)}`;
}).join(" ");

const TEXT_RADIUS = 58;
const textCircle = `M ${CENTER - TEXT_RADIUS},${CENTER} a ${TEXT_RADIUS},${TEXT_RADIUS} 0 1,1 ${TEXT_RADIUS * 2},0 a ${TEXT_RADIUS},${TEXT_RADIUS} 0 1,1 -${TEXT_RADIUS * 2},0`;

// Round "My projects" button with spinning circular text. Render it only once per page (it uses an SVG id).
const ProjectsBtn = () => (
  <div className="mx-auto xl:mx-0">
    <a
      href="#work"
      aria-label="View my projects"
      className="relative w-46.25 h-46.25 flex justify-center items-center group"
    >
      <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="absolute inset-0 w-full h-full" aria-hidden>
        <polygon
          points={starRing}
          fill="rgb(250 204 21 / 0.15)"
          stroke="rgb(19 20 36 / 0.3)"
          strokeWidth="1"
          className="group-hover:fill-accent group-hover:stroke-accent transition-all duration-300"
        />
      </svg>

      <svg
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        className="absolute inset-0 w-full h-full animate-spin-slow pointer-events-none select-none"
        aria-hidden
      >
        <defs>
          <path id="projects-btn-text-path" d={textCircle} />
        </defs>
        <text fill="#131424" fontSize="13" fontWeight="600" letterSpacing="4">
          <textPath href="#projects-btn-text-path" textLength={2 * Math.PI * TEXT_RADIUS - 6}>
            MY PROJECTS • MY PROJECTS •
          </textPath>
        </text>
      </svg>

      <HiArrowRight
        className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300"
        aria-hidden
      />
    </a>
  </div>
);

export default ProjectsBtn;
