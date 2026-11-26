import Footer from "@/components/Footer";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Work from "@/components/sections/Work";

// One scrolling page; each section's id matches a nav link.
export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Services />
        <Work />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
