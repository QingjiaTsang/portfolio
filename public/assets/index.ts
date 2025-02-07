import backend from "./backend.png";
import github from "./github.png";
import quickLearner from "./quick_learner.png";
import techEnthusiast from "./tech_enthusiast.png";
import docker from "./tech/docker.png";
import drizzle from "./tech/drizzle.jpg";
import electron from "./tech/electron.png";
import framer_motion from "./tech/framer_motion.png";
import honojs from "./tech/honojs.png";
import jotai from "./tech/jotai.png";
import nextjs from "./tech/nextjs.png";
import nodejs from "./tech/nodejs.png";
import reactjs from "./tech/reactjs.png";
import supabase from "./tech/supabase.png";
import tailwind from "./tech/tailwind.png";
import tanstack_query from "./tech/tanstack_query.png";
import typescript from "./tech/typescript.png";
import web from "./web.png";

// 基础图标和 Logo
const baseImages = {
  backend,
  quickLearner,
  techEnthusiast,
  web,
  github,

} as const;

// 技术栈图标
const techImages = {
  docker,
  framer_motion,
  electron,
  tanstack_query,
  nodejs,
  reactjs,
  jotai,
  tailwind,
  typescript,
  drizzle,
  honojs,
  nextjs,
  supabase,
} as const;

// 项目图片
const projectImages = {

} as const;

// 导出所有图片资源
export const images = {
  ...baseImages,
  ...techImages,
  ...projectImages,
} as const;

// 为了保持向后兼容，同时导出单个变量
export {
  backend,
  // Project images
  // Tech stack images
  docker,
  drizzle,
  electron,
  framer_motion,
  github,
  honojs,

  jotai,
  // Base images
  // Company images
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
};
