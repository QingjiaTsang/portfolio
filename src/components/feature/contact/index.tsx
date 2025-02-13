"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

import { SectionWrapper } from "@/components/common/section-wrapper";
import { ContactForm } from "@/components/feature/contact/contact-form";

export function ContactComponent() {
  const t = useTranslations('contact');

  return (
    <section>
      <div className="relative flex min-h-screen flex-col items-center justify-center">
        <Image
          src="/assets/terminal.png"
          alt="terminal-bg"
          fill
          className="absolute inset-0 min-h-screen"
        />

        <div className="contact-container">
          <div className="max-sm:pl-3">
            <h3 className="head-text">{t('title')}</h3>
            <p className="mt-3 text-sm font-medium text-custom-white-600 text-white/80 sm:text-lg">
              {t('description')}
            </p>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export const Contact = SectionWrapper(ContactComponent, "contact");
