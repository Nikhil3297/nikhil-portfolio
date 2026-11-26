"use client";

import { motion } from "framer-motion";

import Avatar from "@/components/Avatar";
import ParticlesContainer from "@/components/ParticlesContainer";
import ProjectsBtn from "@/components/ProjectsBtn";
import Section from "@/components/Section";
import { home } from "@/lib/data";
import { fadeIn, reveal } from "@/variants";

const Hero = () => (
  <Section id="home">
    <div className="w-full min-h-screen flex">
      <div className="relative z-10 text-center flex flex-col justify-center pt-44 xl:pt-40 xl:pb-16 xl:text-left container mx-auto">
        <motion.h1 variants={fadeIn("down", 0.2)} {...reveal} className="h1">
          {home.title.lead} <br /> {home.title.mid} <span className="highlight">{home.title.accent}</span>
        </motion.h1>

        <motion.p variants={fadeIn("down", 0.3)} {...reveal} className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
          {home.intro}
        </motion.p>

        <motion.div variants={fadeIn("down", 0.4)} {...reveal} className="flex justify-center xl:justify-start">
          <ProjectsBtn />
        </motion.div>

        {/* Below xl the avatar sits under the text, resting on the bottom edge of the section. */}
        <motion.div variants={fadeIn("up", 0.5)} {...reveal} className="xl:hidden relative mx-auto mt-10 w-full max-w-sm h-90 sm:h-110">
          <Avatar />
        </motion.div>
      </div>
    </div>

    <div className="w-7xl h-full absolute right-0 bottom-0 pointer-events-none">
      <div className="hidden xl:block bg-explosion w-full h-full absolute translate-z-0" aria-hidden />

      <ParticlesContainer />

      <motion.div
        variants={fadeIn("up", 0.5)}
        {...reveal}
        className="hidden xl:flex w-full h-full max-w-184.25 max-h-169.5 absolute bottom-0 right-[8%]"
      >
        <Avatar />
      </motion.div>
    </div>
  </Section>
);

export default Hero;
