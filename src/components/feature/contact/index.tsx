"use client";

import Image from "next/image";

import { SectionWrapper } from "@/components/common/section-wrapper";
import { ContactForm } from "@/components/feature/contact/contact-form";

export function ContactComponent() {
  return (
    <section >
      <div className="relative flex min-h-screen flex-col items-center justify-center">
        <Image
          src="/assets/terminal.png"
          alt="terminal-bg"
          fill
          className="absolute inset-0 min-h-screen"
          priority
        />

        <div className="contact-container">
          <h3 className="head-text">Let's talk</h3>
          <p className="mt-3 text-lg text-custom-white-600">
            Whether you're looking to build a new website, improve your existing platform, or bring a unique project to
            life, I'm here to help.
          </p>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export const Contact = SectionWrapper(ContactComponent, "contact");
