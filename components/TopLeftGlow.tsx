// Soft yellow glow in the top-left corner of the page.
const TopLeftGlow = () => (
  <div
    className="absolute left-0 top-0 z-0 w-60 h-60 xl:w-120 xl:h-120 pointer-events-none bg-[radial-gradient(circle_at_6%_8%,rgb(250_204_21/0.35),transparent_45%),radial-gradient(circle_at_30%_2%,rgb(245_158_11/0.12),transparent_30%)]"
    aria-hidden
  />
);

export default TopLeftGlow;
