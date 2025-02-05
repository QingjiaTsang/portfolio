import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: z.string().min(1, "EmailJS Public Key is required"),
  NEXT_PUBLIC_EMAILJS_SERVICE_ID: z.string().min(1, "EmailJS Service ID is required").startsWith("service_", "Service ID must start with 'service_'"),
  NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: z.string().min(1, "EmailJS Template ID is required").startsWith("template_", "Template ID must start with 'template_'"),
});

function envParse() {
  const envVars = {
    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
    NEXT_PUBLIC_EMAILJS_SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  };

  const parsed = envSchema.safeParse(envVars);

  if (!parsed.success) {
    console.error(
      "❌ Environment variables validation failed:",
      JSON.stringify(parsed.error.flatten().fieldErrors, null, 2),
    );
    throw new Error("Environment variables validation failed");
  }

  return parsed.data;
}

export const env = envParse();
