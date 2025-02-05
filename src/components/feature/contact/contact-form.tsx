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

export function ContactForm() {
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

      toast.success("Thank you for your message 😃");
    }
    catch (error) {
      console.error(error);
      toast.error("I didn't receive your message 😢");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-12 flex flex-col space-y-7">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="field-label">Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="e.g., John Doe"
                  className="field-input"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="field-label">Email Address</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="email"
                  placeholder="e.g., john.doe@gmail.com"
                  className="field-input"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="field-label">Message</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="Share your thoughts or questions..."
                  rows={5}
                  className="field-input min-h-[120px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          variant="outline"
          size="lg"
          className="field-btn"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? "Sending..." : "Send Message"}
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
