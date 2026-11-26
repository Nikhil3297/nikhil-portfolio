"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";

import ContactForm from "@/components/ContactForm";
import Section from "@/components/Section";
import { contact, site } from "@/lib/data";
import { fadeIn, reveal } from "@/variants";

const Contact = () => (
  <Section id="contact" className="bg-soft/90 py-24 xl:py-32">
    <div className="container mx-auto text-center flex items-center justify-center">
      <div className="flex flex-col w-full max-w-175">
        <motion.h2 variants={fadeIn("up", 0.2)} {...reveal} className="h2 mb-4">
          {contact.title.lead} <span className="highlight">{contact.title.accent}</span>
        </motion.h2>
        <motion.p variants={fadeIn("up", 0.3)} {...reveal} className="mb-8">
          {contact.intro}
        </motion.p>

        <motion.div
          variants={fadeIn("up", 0.35)}
          {...reveal}
          className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-x-8 gap-y-3 mb-12 text-sm"
        >
          <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-accent-dark transition-colors">
            <FaEnvelope className="text-accent-dark" aria-hidden /> {site.email}
          </a>
          <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 hover:text-accent-dark transition-colors">
            <FaPhone className="text-accent-dark" aria-hidden /> {site.phone}
          </a>
          <span className="flex items-center gap-2">
            <FaLocationDot className="text-accent-dark" aria-hidden /> {site.location}
          </span>
        </motion.div>

        <ContactForm />
      </div>
    </div>
  </Section>
);

export default Contact;
