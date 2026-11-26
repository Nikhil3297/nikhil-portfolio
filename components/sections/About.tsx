"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";

import Circles from "@/components/Circles";
import Section from "@/components/Section";
import { about, type AboutItem } from "@/lib/data";
import { fadeIn, reveal } from "@/variants";

// Skill groups: a small label, then icons (name on hover) and text chips.
const SkillGroup = ({ title, skills, chips }: AboutItem) => (
  <div className="flex flex-col gap-y-2 items-center xl:items-start">
    <div className="text-xs uppercase tracking-[2px] text-muted">{title}</div>
    <div className="flex flex-wrap justify-center xl:justify-start items-center gap-x-4 gap-y-2">
      {skills?.map(({ name, Icon }) => (
        <div key={name} title={name} className="text-2xl text-primary hover:text-accent-dark transition-colors">
          <Icon role="img" aria-label={name} />
        </div>
      ))}
      {chips?.map((chip) => (
        <span key={chip} className="text-xs text-primary bg-accent/25 border border-accent/60 rounded-full px-3 py-1">
          {chip}
        </span>
      ))}
    </div>
  </div>
);

const TimelineItem = ({ title, stage }: AboutItem) => (
  <div className="flex flex-col md:flex-row max-w-max gap-x-2 gap-y-1 items-center text-center md:text-left text-muted">
    <div>{title}</div>
    {stage && (
      <>
        <div className="hidden md:flex">-</div>
        <div className="font-semibold text-accent-dark">{stage}</div>
      </>
    )}
  </div>
);

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <Section id="about" className="bg-soft/90 py-24 xl:py-32 text-center xl:text-left">
      <Circles />

      <div className="container mx-auto flex flex-col items-center xl:flex-row gap-x-10 gap-y-12">
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2 variants={fadeIn("right", 0.2)} {...reveal} className="h2">
            {about.title.lead} <span className="highlight">{about.title.accent}</span> {about.title.tail}
          </motion.h2>

          <motion.p variants={fadeIn("right", 0.4)} {...reveal} className="max-w-125 mx-auto xl:mx-0 mb-10 xl:mb-12 px-2 xl:px-0">
            {about.intro}
          </motion.p>

          <motion.div
            variants={fadeIn("right", 0.6)}
            {...reveal}
            className="grid grid-cols-2 gap-y-8 md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 w-full"
          >
            {about.counters.map(({ value, decimals, suffix, label }, i) => (
              <div
                key={label}
                className={`relative flex-1 flex flex-col items-center xl:items-start md:px-2 xl:px-0 xl:pr-6 ${
                  i < about.counters.length - 1
                    ? "md:after:w-px md:after:h-full md:after:bg-line md:after:absolute md:after:top-0 md:after:right-0"
                    : ""
                }`}
              >
                <div className="text-2xl xl:text-4xl font-extrabold mb-2">
                  <span className="highlight">
                    <CountUp end={value} decimals={decimals ?? 0} duration={4} suffix={suffix} enableScrollSpy scrollSpyOnce />
                  </span>
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-28 text-muted">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn("left", 0.4)}
          {...reveal}
          className="flex flex-col w-full xl:max-w-[48%] xl:min-h-110"
        >
          <div role="tablist" className="flex flex-wrap justify-center xl:justify-start gap-x-4 gap-y-3 xl:gap-x-8 mx-auto xl:mx-0 mb-6">
            {about.tabs.map((tab, tabI) => (
              <button
                key={tab.title}
                type="button"
                role="tab"
                aria-selected={index === tabI}
                className={`${
                  index === tabI
                    ? "text-primary font-semibold after:w-full after:h-1 after:bg-accent after:transition-all after:duration-300"
                    : "text-muted after:w-8 after:h-0.5 after:bg-primary/25"
                } cursor-pointer capitalize xl:text-lg relative after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(tabI)}
              >
                {tab.title}
              </button>
            ))}
          </div>

          <div role="tabpanel" className="py-2 xl:py-4 flex flex-col gap-y-5 items-center xl:items-start">
            {about.tabs[index].items.map((item) =>
              item.skills || item.chips ? (
                <SkillGroup key={item.title} {...item} />
              ) : (
                <TimelineItem key={item.title} {...item} />
              ),
            )}
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;
