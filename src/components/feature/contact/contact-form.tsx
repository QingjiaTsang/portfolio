"use client";

import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import type { ContactFormData } from "@/components/feature/contact/schema";

import { contactSchema } from "@/components/feature/contact/schema";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { env } from "@/lib/env";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

export function ContactForm() {
  const t = useTranslations('contact.form');
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await emailjs.send(
        env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          to_name: "Qingjia Tsang",
          from_email: data.email,
          to_email: "johnlocke123@gmail.com",
          message: data.message,
        },
        env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      );

      toast.success(t('success'));
    }
    catch (error) {
      console.error(error);
      toast.error(t('error'));
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-4 flex flex-col space-y-3 px-3 xs:mt-6 xs:space-y-4 xs:px-4 sm:mt-8 sm:space-y-5 sm:px-0"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sm:field-label text-xs font-medium text-white/80 xs:text-sm">
                {t('name.label')}
              </FormLabel>
              <FormControl>
                <Input
                  placeholder={t('name.placeholder')}
                  className="sm:field-input h-8 text-xs placeholder:text-xs focus:ring-purple-500/40 xs:h-9 xs:text-sm xs:placeholder:text-sm"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-[10px] xs:text-xs sm:text-base" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sm:field-label text-xs font-medium text-white/80 xs:text-sm">
                {t('email.label')}
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="email"
                  placeholder={t('email.placeholder')}
                  className="sm:field-input h-8 text-xs placeholder:text-xs focus:ring-purple-500/40 xs:h-9 xs:text-sm xs:placeholder:text-sm"
                />
              </FormControl>
              <FormMessage className="text-[10px] xs:text-xs sm:text-base" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sm:field-label text-xs font-medium text-white/80 xs:text-sm">
                {t('message.label')}
              </FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder={t('message.placeholder')}
                  rows={4}
                  className={cn(
                    "sm:field-input resize-none focus:ring-purple-500/40",
                    "min-h-[80px] text-xs placeholder:text-xs",
                    "xs:min-h-[90px] xs:text-sm xs:placeholder:text-sm",
                  )}
                />
              </FormControl>
              <FormMessage className="text-[10px] xs:text-xs sm:text-base" />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className={cn(
            "contact-submit-btn",
            "!mt-5 flex h-10 items-center justify-center gap-1.5 rounded-lg px-4 text-xs font-medium",
            "xs:h-12 xs:gap-2 xs:px-5 xs:text-sm",
            "transition-all duration-300",
          )}
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? t('submit.sending') : t('submit.default')}
          <Image
            src="/assets/arrow-up.png"
            alt="arrow-up"
            className="field-btn_arrow"
            width={24}
            height={24}
          />
        </Button>
      </form>
    </Form>
  );
}
