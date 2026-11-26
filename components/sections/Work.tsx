"use client";

import { motion } from "framer-motion";

import Circles from "@/components/Circles";
import Section from "@/components/Section";
import WorkSlider from "@/components/WorkSlider";
import { work } from "@/lib/data";
import { fadeIn, reveal } from "@/variants";

const Work = () => (
  <Section id="work" className="bg-soft/90 py-24 xl:py-36">
    <Circles />
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row gap-x-8">
        <div className="text-center flex xl:w-[30vw] flex-col xl:text-left mb-6 xl:mb-0">
          <motion.h2 variants={fadeIn("up", 0.2)} {...reveal} className="h2 xl:mt-12">
            My work <span className="text-accent">.</span>
          </motion.h2>
          <motion.p variants={fadeIn("up", 0.4)} {...reveal} className="mb-4 max-w-100 mx-auto xl:mx-0">
            {work.intro}
          </motion.p>
        </div>

        <motion.div variants={fadeIn("down", 0.6)} {...reveal} className="w-full xl:max-w-[65%]">
          <WorkSlider />
        </motion.div>
      </div>
    </div>
  </Section>
);

export default Work;
