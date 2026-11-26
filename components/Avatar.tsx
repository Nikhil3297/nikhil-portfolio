import Image from "next/image";
import { FaCss3Alt, FaHtml5, FaJs, FaPhp, FaReact, FaWordpress } from "react-icons/fa6";

import { site } from "@/lib/data";

const orbitIcons = [FaWordpress, FaPhp, FaHtml5, FaCss3Alt, FaJs, FaReact];

// Shows your photo when `site.avatar` is set, otherwise an animated orb with your initials.
const Avatar = () => {
  if (site.avatar) {
    return (
      <Image
        src={site.avatar}
        alt={site.name}
        width={1000}
        height={1116}
        sizes="(min-width: 1200px) 610px, 90vw"
        priority
        className="translate-z-0 w-full h-full object-contain object-bottom"
      />
    );
  }

  return (
    <div className="relative w-full h-full flex items-center justify-center" aria-hidden>
      <div className="relative w-[min(100%,34rem)] aspect-square animate-float">
        <div className="absolute inset-[14%] rounded-full bg-accent/40 blur-3xl" />

        <div className="absolute inset-0 rounded-full border border-dashed border-primary/20 animate-spin-slower-reverse" />

        <div className="absolute inset-[9%] rounded-full border border-primary/10 animate-spin-slower">
          {orbitIcons.map((Icon, i) => {
            const angle = (2 * Math.PI * i) / orbitIcons.length;
            return (
              <div
                key={i}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{
                  // Rounded so server and client render identical strings (avoids a hydration mismatch).
                  left: `${(50 + 50 * Math.cos(angle)).toFixed(3)}%`,
                  top: `${(50 + 50 * Math.sin(angle)).toFixed(3)}%`,
                }}
              >
                <div className="w-13 h-13 rounded-full bg-white border border-line flex items-center justify-center text-2xl text-primary shadow-[0_8px_24px_rgb(19_20_36/0.1)] animate-spin-slower-reverse">
                  <Icon />
                </div>
              </div>
            );
          })}
        </div>

        <div className="absolute inset-[22%] rounded-full border-2 border-accent/70" />

        <div className="absolute inset-[27%] rounded-full bg-[radial-gradient(circle_at_30%_25%,#fff7c2,#facc15_35%,#f59e0b_70%,#b45309_100%)] shadow-[0_30px_80px_rgb(245_158_11/0.35),inset_0_-24px_60px_rgb(0_0_0/0.15)] flex flex-col items-center justify-center text-primary">
          <span className="text-7xl font-bold tracking-tight leading-none">{site.initials}</span>
          <span className="mt-3 text-sm font-semibold tracking-[0.3em] text-primary/70">&lt;/&gt;</span>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
