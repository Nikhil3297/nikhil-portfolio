import Socials from "@/components/Socials";
import { site } from "@/lib/data";

const Header = () => {
  const [firstName, ...rest] = site.name.toLowerCase().split(" ");

  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-22.5">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-5 py-8">
          <a href="#home" className="text-[28px] leading-none tracking-tight" aria-label="Home">
            <span className="font-semibold">{firstName}</span>{" "}
            <span className="font-extralight">{rest.join(" ")}</span>
            <span className="text-accent font-bold">.</span>
          </a>

          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
