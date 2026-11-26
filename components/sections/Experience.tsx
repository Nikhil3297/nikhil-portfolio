"use client";

import { motion } from "framer-motion";

import Bulb from "@/components/Bulb";
import ExperienceSlider from "@/components/ExperienceSlider";
import Section from "@/components/Section";
import { fadeIn, reveal } from "@/variants";

const Experience = () => (
  <Section id="experience" className="bg-white/70 py-24 xl:py-32 text-center">
    <div className="container mx-auto flex flex-col justify-center">
      <motion.h2 variants={fadeIn("up", 0.2)} {...reveal} className="h2 mb-8 xl:mb-12">
        Where I&apos;ve <span className="highlight">worked.</span>
      </motion.h2>

      <motion.div variants={fadeIn("up", 0.4)} {...reveal}>
        <ExperienceSlider />
      </motion.div>
    </div>
    <Bulb id="bulb-experience" />
  </Section>
);

export default Experience;
