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
];

export const workExperience = [
  {
    id: 1,
    title: "Self-taught Web Developer Journey",
    desc: "My journey into frontend development began with a passion for learning and coding. As an autodidact, I regularly watched technical YouTube channels like Syntax, Wes Bos, Jack Herrington, Hamed Bahram, Dave Gray, and many others to deepen my knowledge (I'm grateful for their valuable content and guidance). Through practical application, I developed strong skills in React.js and JavaScript, while staying up-to-date with the latest tech trends by reading articles on Medium and DEV Community. This relentless pursuit of learning and embracing new technologies has shaped me into a capable and adaptable developer.",
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

export const projects = [
  {
    id: 1,
    title: "Slack Clone - Real-Time Chat App with Video Call",
    des: "A real-time team communication app with peer-to-peer video call functionality, built with Next.js, TailwindCSS, Tanstack Query, Framer Motion, and Convex.",
    img: "/p1.svg",
    hoverImg: "/p1-hover.svg",
    iconLists: ["/ts.svg", "/nextjs.svg", "/tanstack_query.png", "/tailwindcss.svg", "/shadcn.png", "/framer-motion.svg", "/convex.svg", "/clerk.svg", "/stream.svg"],
    link: "https://slack.rest",
  },
  {
    id: 2,
    title: "EstateHub - Real Estate App",
    des: "A real estate app that allows users to search for, add/edit/delete properties, view property details, and complete transactions.",
    img: "/p2.svg",
    hoverImg: "/p2-hover.svg",
    iconLists: ["/ts.svg", "/nextjs.svg", "/tailwindcss.svg", "/framer-motion.svg", "/kinde.svg", "/prisma.svg", "/supabase.svg", "/stripe.svg"],
    link: "https://property-umber.vercel.app",
  },
  {
    id: 3,
    title: "NoteBot - Note Taking App with AI",
    des: "A note-taking app enhanced with AI and Pinecone for vector embeddings, enabling users to interact with their notes intelligently.",
    img: "/p3.svg",
    hoverImg: "/p3-hover.svg",
    iconLists: ["/ts.svg", "/nextjs.svg", "/tailwindcss.svg", "/prisma.svg", "/mongodb.svg", "/clerk.svg", "/openai.svg"],
    link: "https://nextjs-note-taking-chatbot.vercel.app/",
  },
  {
    id: 4,
    title: "AICV - Resume Builder with AI (monorepo)",
    des: "A resume builder with AI that allows users to create and optimize a beautiful resume with AI based on the job description and user background.",
    img: "/p4.svg",
    // hoverImg: "/p4-hover.svg",
    iconLists: ["/ts.svg", "/react.svg", "/tanstack.png", "/tailwindcss.svg", "/honojs.png", "/drizzle.svg", "/authjs.webp", "/cloudflare.svg"],
    link: "coming soon, stay tuned...",
  },
];
