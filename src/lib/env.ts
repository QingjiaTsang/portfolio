import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /**
   * Environment variables available on both client and server
   */
  client: {
    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: z.string().min(1, "EmailJS Public Key is required"),
    NEXT_PUBLIC_EMAILJS_SERVICE_ID: z.string().min(1, "EmailJS Service ID is required").startsWith("service_", "Service ID must start with 'service_'"),
    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: z.string().min(1, "EmailJS Template ID is required").startsWith("template_", "Template ID must start with 'template_'"),

    NEXT_PUBLIC_RESUME_CN_KEY: z.string(),
    NEXT_PUBLIC_RESUME_EN_KEY: z.string(),
  },

  /**
   * Environment variables only available on server
   */
  server: {
    NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
    R2_ACCESS_KEY_ID: z.string(),
    R2_SECRET_ACCESS_KEY: z.string(),
    R2_BUCKET_NAME: z.string(),
    R2_ACCOUNT_ID: z.string(),
  },

  /**
   * Pass environment variables to validation
   */
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,

    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
    NEXT_PUBLIC_EMAILJS_SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,

    NEXT_PUBLIC_RESUME_CN_KEY: process.env.NEXT_PUBLIC_RESUME_CN_KEY,
    NEXT_PUBLIC_RESUME_EN_KEY: process.env.NEXT_PUBLIC_RESUME_EN_KEY,

    R2_ACCESS_KEY_ID: process.env.R2_ACCESS_KEY_ID,
    R2_SECRET_ACCESS_KEY: process.env.R2_SECRET_ACCESS_KEY,
    R2_BUCKET_NAME: process.env.R2_BUCKET_NAME,
    R2_ACCOUNT_ID: process.env.R2_ACCOUNT_ID,
  },
});
