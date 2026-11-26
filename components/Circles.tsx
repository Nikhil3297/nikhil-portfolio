// Slowly rotating rings tucked into the bottom-right corner of a section.
const Circles = () => (
  <div className="w-50 xl:w-75 absolute -right-16 -bottom-2 animate-pulse -z-10 pointer-events-none" aria-hidden>
    <svg viewBox="0 0 300 300" className="w-full h-full animate-spin-slower">
      <circle cx="150" cy="150" r="140" fill="none" stroke="rgb(250 204 21 / 0.9)" strokeWidth="2.5" strokeDasharray="320 70" />
      <circle cx="150" cy="150" r="112" fill="none" stroke="rgb(19 20 36 / 0.18)" strokeWidth="1.5" strokeDasharray="3 9" />
      <circle cx="150" cy="150" r="84" fill="none" stroke="rgb(245 158 11 / 0.6)" strokeWidth="3" strokeDasharray="140 50" />
      <circle cx="150" cy="150" r="56" fill="none" stroke="rgb(19 20 36 / 0.1)" strokeWidth="1" />
      <circle cx="290" cy="150" r="5" fill="#facc15" />
      <circle cx="150" cy="38" r="3.5" fill="#131424" fillOpacity="0.4" />
      <circle cx="66" cy="150" r="4" fill="#f59e0b" />
    </svg>
  </div>
);

export default Circles;
