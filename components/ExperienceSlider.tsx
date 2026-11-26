"use client";

import { FaBriefcase } from "react-icons/fa6";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { experience } from "@/lib/data";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const initialsOf = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

// One slide per job, laid out like the demo's testimonial slider.
const ExperienceSlider = () => (
  <Swiper navigation pagination={{ clickable: true }} modules={[Navigation, Pagination]} autoHeight>
    {experience.map(({ company, role, period, points }) => (
      <SwiperSlide key={company}>
        <div className="flex flex-col items-center md:flex-row gap-x-8 gap-y-8 px-12 md:px-16 pt-4 pb-14">
          <div className="w-full max-w-75 flex flex-col items-center relative mx-auto xl:mx-0">
            <div className="flex flex-col justify-center text-center">
              <div className="mb-3 mx-auto w-25 h-25 rounded-full bg-linear-to-br from-accent to-amber text-primary flex items-center justify-center text-3xl font-bold shadow-[0_0_40px_rgb(250_204_21/0.3)]">
                {initialsOf(company)}
              </div>
              <div className="text-lg font-semibold">{company}</div>
              <div className="text-[12px] uppercase tracking-widest text-muted">{role}</div>
              <div className="mt-1 text-sm font-semibold text-accent-dark">{period}</div>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-center before:w-px xl:before:bg-line xl:before:absolute xl:before:left-0 xl:before:h-full relative xl:pl-20">
            <div className="mb-4">
              <FaBriefcase className="text-4xl xl:text-5xl text-accent mx-auto md:mx-0" aria-hidden />
            </div>
            <ul className="flex flex-col gap-y-3 text-left">
              {points.map((point) => (
                <li key={point} className="flex gap-x-3 text-muted xl:text-lg">
                  <span className="mt-2.5 xl:mt-3 w-1.5 h-1.5 rounded-full bg-accent shrink-0" aria-hidden />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
);

export default ExperienceSlider;
