"use client";

import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { work, type Project } from "@/lib/data";

import "swiper/css";
import "swiper/css/pagination";

const PROJECTS_PER_SLIDE = 4;

// The last tile is always a "your website could be next" card that scrolls to the contact form.
const tiles: (Project | "cta")[] = [...work.projects, "cta"];

const slides = Array.from({ length: Math.ceil(tiles.length / PROJECTS_PER_SLIDE) }, (_, i) =>
  tiles.slice(i * PROJECTS_PER_SLIDE, (i + 1) * PROJECTS_PER_SLIDE),
);

// Generated "screenshot" used when the project has no image.
const Thumbnail = ({ title, domain, Icon, colors }: Project) => (
  <div
    className="absolute inset-0"
    style={{ background: `linear-gradient(135deg, ${colors[0]}, ${colors[1]})` }}
  >
    <div className="absolute inset-x-0 top-0 h-5 sm:h-6 bg-black/25 flex items-center gap-1.5 px-3">
      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white/60" />
      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white/40" />
      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white/25" />
    </div>
    <div className="absolute inset-0 pt-5 sm:pt-6 flex flex-col items-center justify-center gap-1 sm:gap-2 px-3 text-center">
      <Icon className="text-2xl sm:text-5xl text-white/90 drop-shadow-lg" aria-hidden />
      <div className="text-xs sm:text-lg font-semibold leading-tight">{title}</div>
      <div className="hidden sm:block text-[11px] tracking-wider text-white/70">{domain}</div>
    </div>
  </div>
);

const ProjectCard = (project: Project) => (
  <a
    href={`https://${project.domain}`}
    target="_blank"
    rel="noreferrer noopener"
    aria-label={`${project.title} — live project`}
    className="relative aspect-5/3 rounded-lg overflow-hidden flex items-center justify-center group text-white border border-line shadow-[0_8px_30px_rgb(19_20_36/0.08)]"
  >
    {project.image ? (
      <Image
        src={project.image}
        alt={`${project.title} website`}
        fill
        sizes="(min-width: 1200px) 380px, 50vw"
        className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
      />
    ) : (
      <Thumbnail {...project} />
    )}

    <div
      className="absolute inset-0 bg-linear-to-t from-primary via-primary/85 to-violet/50 opacity-0 group-hover:opacity-90 group-focus-visible:opacity-90 transition-all duration-700"
      aria-hidden
    />

    <div className="absolute bottom-0 inset-x-0 flex flex-col items-center gap-1 translate-y-full group-hover:-translate-y-6 xl:group-hover:-translate-y-14 group-focus-visible:-translate-y-6 transition-all duration-300 px-2 text-center">
      <div className="text-xs sm:text-base font-semibold">{project.title}</div>
      <div className="flex items-center gap-x-2 text-[11px] sm:text-[13px] tracking-[0.2em] text-accent">
        <div className="delay-100">LIVE</div>
        <div className="translate-y-[500%] group-hover:translate-y-0 group-focus-visible:translate-y-0 transition-all duration-300 delay-150">
          PROJECT
        </div>
        <div className="text-xl translate-y-[500%] group-hover:translate-y-0 group-focus-visible:translate-y-0 transition-all duration-300 delay-150">
          <BsArrowRight aria-hidden />
        </div>
      </div>
    </div>
  </a>
);

const NextProjectCard = () => (
  <a
    href="#contact"
    className="relative aspect-5/3 rounded-lg border-2 border-dashed border-accent hover:bg-accent/20 flex flex-col items-center justify-center gap-1 sm:gap-2 text-center px-3 group transition-all duration-300"
  >
    <div className="text-xs sm:text-lg font-semibold leading-tight">Your website could be next</div>
    <div className="flex items-center gap-2 text-[11px] sm:text-[13px] font-semibold tracking-[0.2em] text-accent-dark">
      LET&apos;S TALK
      <BsArrowRight className="text-lg group-hover:translate-x-1 transition-transform duration-300" aria-hidden />
    </div>
  </a>
);

const WorkSlider = () => (
  <Swiper spaceBetween={10} pagination={{ clickable: true }} modules={[Pagination]} className="h-75 sm:h-130">
    {slides.map((slideTiles, slideI) => (
      <SwiperSlide key={slideI}>
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          {slideTiles.map((tile) =>
            tile === "cta" ? <NextProjectCard key="cta" /> : <ProjectCard key={tile.domain} {...tile} />,
          )}
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
);

export default WorkSlider;
