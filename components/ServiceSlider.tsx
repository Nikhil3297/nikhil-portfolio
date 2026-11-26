"use client";

import { RxArrowTopRight } from "react-icons/rx";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { services } from "@/lib/data";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const ServiceSlider = () => (
  <Swiper
    breakpoints={{
      320: { slidesPerView: 1, spaceBetween: 15 },
      640: { slidesPerView: 3, spaceBetween: 15 },
    }}
    pagination={{ clickable: true }}
    modules={[FreeMode, Pagination]}
    freeMode
    className="h-90 sm:h-95"
  >
    {services.items.map(({ title, description, Icon }) => (
      <SwiperSlide key={title}>
        {/* Cards fill the slide (minus room for the pagination dots) so they all line up. */}
        <div className="bg-white border border-line h-[calc(100%-3rem)] rounded-xl px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-grab shadow-[0_6px_24px_rgb(19_20_36/0.05)] hover:border-accent hover:shadow-[0_14px_40px_rgb(245_158_11/0.18)] transition-all duration-300">
          <div className="w-14 h-14 shrink-0 rounded-full bg-accent text-primary text-2xl flex items-center justify-center mb-5">
            <Icon aria-hidden />
          </div>

          <div className="mb-8">
            <div className="mb-2 text-lg font-semibold">{title}</div>
            <p className="max-w-87.5 leading-normal text-sm">{description}</p>
          </div>

          <div className="text-3xl sm:mt-auto">
            <RxArrowTopRight
              className="group-hover:rotate-45 group-hover:text-accent-dark transition-all duration-300"
              aria-hidden
            />
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
);

export default ServiceSlider;
