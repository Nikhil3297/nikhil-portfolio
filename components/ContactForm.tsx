"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";

import { site } from "@/lib/data";
import { fadeIn, reveal } from "@/variants";

type Fields = { name: string; email: string; subject: string; message: string };

const EMPTY: Fields = { name: "", email: "", subject: "", message: "" };

const validators: Record<keyof Fields, (value: string) => boolean> = {
  name: (v) => v.trim().length >= 2,
  email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
  subject: (v) => v.trim().length >= 2,
  message: (v) => v.trim().length >= 10,
};

const errorText: Record<keyof Fields, string> = {
  name: "Please enter your name.",
  email: "Please enter a valid e-mail.",
  subject: "Please add a subject.",
  message: "Message should be at least 10 characters.",
};

// No backend needed: on submit this opens the visitor's email app with the message pre-filled.
const ContactForm = () => {
  const [form, setForm] = useState<Fields>(EMPTY);
  const [submitted, setSubmitted] = useState(false);
  const [sent, setSent] = useState(false);

  const errors = Object.fromEntries(
    (Object.keys(validators) as (keyof Fields)[]).map((key) => [key, submitted && !validators[key](form[key])]),
  ) as Record<keyof Fields, boolean>;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setSent(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);

    const isValid = (Object.keys(validators) as (keyof Fields)[]).every((key) => validators[key](form[key]));
    if (!isValid) return;

    const body = `${form.message.trim()}\n\n— ${form.name.trim()} (${form.email.trim()})`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(form.subject.trim())}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const fieldProps = (name: keyof Fields) => ({
    name,
    value: form[name],
    onChange: handleChange,
    "aria-invalid": errors[name],
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
  });

  const fieldError = (name: keyof Fields) =>
    errors[name] && (
      <p id={`${name}-error`} className="mt-1 text-left text-sm text-red-600" role="alert">
        {errorText[name]}
      </p>
    );

  return (
    <motion.form
      variants={fadeIn("up", 0.4)}
      {...reveal}
      className="flex-1 flex flex-col gap-6 w-full mx-auto"
      onSubmit={handleSubmit}
      autoComplete="off"
      noValidate
    >
      <div className="flex flex-col sm:flex-row gap-6 w-full">
        <div className="flex-1 min-w-0">
          <input type="text" placeholder="Name" className="input" maxLength={100} {...fieldProps("name")} />
          {fieldError("name")}
        </div>
        <div className="flex-1 min-w-0">
          <input type="email" placeholder="E-mail" className="input" maxLength={100} {...fieldProps("email")} />
          {fieldError("email")}
        </div>
      </div>
      <div>
        <input type="text" placeholder="Subject" className="input" maxLength={150} {...fieldProps("subject")} />
        {fieldError("subject")}
      </div>
      <div>
        <textarea placeholder="Message..." className="textarea" rows={4} maxLength={1000} {...fieldProps("message")} />
        {fieldError("message")}
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <button
          type="submit"
          className="btn relative rounded-full bg-accent text-primary font-semibold w-42.5 px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:bg-amber hover:shadow-[0_10px_30px_rgb(245_158_11/0.35)] group"
        >
          <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
            Let&apos;s talk
          </span>
          <BsArrowRight
            className="-translate-y-[120%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
            aria-hidden
          />
        </button>

        <p className="text-sm text-center sm:text-left" aria-live="polite">
          {sent && "Opening your email app…"}
        </p>
      </div>
    </motion.form>
  );
};

export default ContactForm;
