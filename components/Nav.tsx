"use client";

import { useEffect, useState } from "react";
import type { IconType } from "react-icons";
import { HiBriefcase, HiEnvelope, HiHome, HiRectangleGroup, HiUser, HiViewColumns } from "react-icons/hi2";

export const navData: { name: string; id: string; Icon: IconType }[] = [
  { name: "home", id: "home", Icon: HiHome },
  { name: "about", id: "about", Icon: HiUser },
  { name: "services", id: "services", Icon: HiRectangleGroup },
  { name: "work", id: "work", Icon: HiViewColumns },
  { name: "experience", id: "experience", Icon: HiBriefcase },
  { name: "contact", id: "contact", Icon: HiEnvelope },
];

// Bottom bar on mobile, floating vertical pill on the right on desktop. Highlights the section currently on screen.
const Nav = () => {
  const [active, setActive] = useState(navData[0].id);

  useEffect(() => {
    // A thin band just above the middle of the screen: whichever section crosses it is the active one.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    for (const { id } of navData) {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen pointer-events-none">
      <div className="pointer-events-auto flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-4 px-4 md:px-40 xl:px-0 h-20 xl:h-max xl:py-4 bg-white/85 backdrop-blur-md border-t xl:border border-line shadow-[0_10px_40px_rgb(19_20_36/0.08)] text-2xl xl:text-xl xl:rounded-full">
        {navData.map(({ name, id, Icon }) => {
          const isActive = id === active;

          return (
            <a
              key={id}
              href={`#${id}`}
              aria-label={name}
              aria-current={isActive ? "true" : undefined}
              className={`${
                isActive ? "bg-accent text-primary" : "text-primary/60 hover:text-primary hover:bg-accent/40"
              } relative w-11 h-11 xl:w-10 xl:h-10 rounded-full flex items-center justify-center group transition-all duration-300`}
            >
              <div role="tooltip" className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                <div className="bg-primary relative flex text-white items-center p-1.5 rounded-[3px]">
                  <div className="text-[12px] leading-none font-semibold capitalize">{name}</div>
                  <div
                    className="border-solid border-l-primary border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"
                    aria-hidden
                  />
                </div>
              </div>

              <Icon aria-hidden />
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
