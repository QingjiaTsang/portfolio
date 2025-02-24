import {
  backend,
  docker,
  drizzle,
  electron,
  framer_motion,
  honojs,
  jotai,
  nextjs,
  nodejs,
  quickLearner,
  reactjs,
  supabase,
  tailwind,
  tanstack_query,
  techEnthusiast,
  typescript,
  web,
} from "../../public/assets";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Tech", link: "#tech" },
  { name: "Experience", link: "#experience" },
  { name: "Works", link: "#works" },
  { name: "Contact", link: "#contact" },
  { name: "Socials", link: "#socials" },
];

export const tags = [
  {
    id: "frontend",
    icon: web,
  },
  {
    id: "quickLearner",
    icon: quickLearner,
  },
  {
    id: "backend",
    icon: backend,
  },
  {
    id: "techEnthusiast",
    icon: techEnthusiast,
  },
] as const;
export type Tag = (typeof tags)[number];

export const technologies = [
  {
    name: "TypeScript",
    icon: typescript,
    shadow: "#1976d2b7",
  },
  {
    name: "React.js",
    icon: reactjs,
    shadow: "#80deea",
  },
  {
    name: "Next.js",
    icon: nextjs,
    shadow: "#212121b7",
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    shadow: "#00acc1b7",
  },
  {
    name: "Tanstack Query",
    icon: tanstack_query,
    shadow: "#ff4154b7",
  },
  {
    name: "Jotai",
    icon: jotai,
    shadow: "#000000b7",
  },
  {
    name: "Framer motion",
    icon: framer_motion,
    shadow: "#212121b7",
  },
  {
    name: "Node.js",
    icon: nodejs,
    shadow: "#43853db7",
  },
  {
    name: "Hono.js",
    icon: honojs,
    shadow: "#e65100b7",
  },
  {
    name: "Drizzle orm",
    icon: drizzle,
    shadow: "#cff36d",
  },
  {
    name: "Electron",
    icon: electron,
    shadow: "#2f3241b7",
  },
  {
    name: "Docker",
    icon: docker,
    shadow: "#2496edb7",
  },
  {
    name: "Supabase",
    icon: supabase,
    shadow: "#3ecf8eb7",
  },
] as const;

export const workExperience = [
  {
    id: "selfTaught",
    thumbnail: "/assets/exp1.svg",
    className: "md:col-span-2",
  },
  {
    id: "desktop",
    thumbnail: "/assets/exp2.svg",
    className: "md:col-span-2",
  },
  {
    id: "freelance",
    thumbnail: "/assets/exp3.svg",
    className: "md:col-span-2",
  },
  {
    id: "lead",
    thumbnail: "/assets/exp4.svg",
    className: "md:col-span-2",
  },
] as const;

export const projects = [
  {
    id: "slack",
    img: "/p1.svg",
    hoverImg: "/p1-hover.svg",
    iconLists: ["/ts.svg", "/nextjs.svg", "/tanstack_query.png", "/tailwindcss.svg", "/shadcn.png", "/framer-motion.svg", "/convex.svg", "/clerk.svg", "/stream.svg"],
    link: "https://slack.qingjiatsang.top",
  },
  {
    id: "estate",
    img: "/p2.svg",
    hoverImg: "/p2-hover.svg",
    iconLists: ["/ts.svg", "/nextjs.svg", "/tailwindcss.svg", "/framer-motion.svg", "/kinde.svg", "/prisma.svg", "/supabase.svg", "/stripe.svg"],
    link: "https://estatehub.qingjiatsang.top",
  },
  {
    id: "note",
    img: "/p3.svg",
    hoverImg: "/p3-hover.svg",
    iconLists: ["/ts.svg", "/nextjs.svg", "/tailwindcss.svg", "/prisma.svg", "/mongodb.svg", "/clerk.svg", "/openai.svg"],
    link: "https://notebot.qingjiatsang.top",
  },
  {
    id: "cv",
    img: "/p4.svg",
    hoverImg: "/p4-hover.svg",
    iconLists: ["/ts.svg", "/react.svg", "/tanstack.png", "/tailwindcss.svg", "/honojs.png", "/drizzle.svg", "/authjs.webp", "/cloudflare.svg"],
    link: "https://aicv.qingjiatsang.top",
  },
] as const;
export type Project = (typeof projects)[number];
