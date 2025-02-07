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
];

export const tags = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Quick Learner",
    icon: quickLearner,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Tech Enthusiast",
    icon: techEnthusiast,
  },
];

export const technologies = [
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React.js",
    icon: reactjs,
  },
  {
    name: "Next.js",
    icon: nextjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Tanstack Query",
    icon: tanstack_query,
  },
  {
    name: "Jotai",
    icon: jotai,
  },
  {
    name: "Framer motion",
    icon: framer_motion,
  },
  {
    name: "Node.js",
    icon: nodejs,
  },
  {
    name: "Hono.js",
    icon: honojs,
  },
  {
    name: "Drizzle orm",
    icon: drizzle,
  },
  {
    name: "Electron",
    icon: electron,
  },

  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Supabase",
    icon: supabase,
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Contributed to the development of a web-based platform using React.js, enhancing user interactivity and optimizing performance. Worked closely with senior engineers to implement responsive layouts and improve the overall user experience.",
    className: "md:col-span-2",
    thumbnail: "/assets/exp1.svg",
  },
  {
    id: 2,
    title: "Desktop App Developer",
    desc: "Built a cross-platform desktop application with React.js & Electron. Focused on performance optimization for native-like experiences, real-time features via WebSocket, and type-safe API integrations with TypeScript, Zod.",
    className: "md:col-span-2",
    thumbnail: "/assets/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Development Project",
    desc: "Led the full development lifecycle of a custom application for a client. Focused on building scalable and maintainable code while ensuring optimal performance and user engagement.",
    className: "md:col-span-2",
    thumbnail: "/assets/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer - Fanteng Technologies",
    desc: "Led a team of frontend developers in designing and maintaining user-facing features for a range of projects using modern frontend technologies like Next.js, Zustand, and TailwindCSS. Successfully collaborated with backend teams to integrate APIs and optimize application performance.",
    className: "md:col-span-2",
    thumbnail: "/assets/exp4.svg",
  },
];
