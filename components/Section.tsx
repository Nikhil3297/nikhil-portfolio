type SectionProps = { id: string; className?: string; children: React.ReactNode };

// Full-height block of the one-page site; `id` is the anchor the nav scrolls to.
// `isolate` lets decorations use -z-10 to sit behind the content but above the section background.
const Section = ({ id, className = "", children }: SectionProps) => (
  <section id={id} className={`relative isolate overflow-hidden min-h-screen flex items-center ${className}`}>
    {children}
  </section>
);

export default Section;
