import backend from "./backend.png";
import carrent from "./carrent.png";
import close from "./close.svg";
import meta from "./company/meta.png";
import shopify from "./company/shopify.png";
import starbucks from "./company/starbucks.png";
import tesla from "./company/tesla.png";
import creator from "./creator.png";
import github from "./github.png";
import jobit from "./jobit.png";
import logo from "./logo.svg";
import menu from "./menu.svg";
import mobile from "./mobile.png";
import css from "./tech/css.png";
import docker from "./tech/docker.png";
import figma from "./tech/figma.png";
import git from "./tech/git.png";
import html from "./tech/html.png";
import javascript from "./tech/javascript.png";
import mongodb from "./tech/mongodb.png";
import nodejs from "./tech/nodejs.png";
import reactjs from "./tech/reactjs.png";
import redux from "./tech/redux.png";
import tailwind from "./tech/tailwind.png";
import threejs from "./tech/threejs.svg";
import typescript from "./tech/typescript.png";
import tripguide from "./tripguide.png";
import web from "./web.png";

// 基础图标和 Logo
const baseImages = {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
} as const;

// 技术栈图标
const techImages = {
  css,
  docker,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  typescript,
  threejs,
} as const;

// 公司图标
const companyImages = {
  meta,
  shopify,
  starbucks,
  tesla,
} as const;

// 项目图片
const projectImages = {
  carrent,
  jobit,
  tripguide,
} as const;

// 导出所有图片资源
export const images = {
  ...baseImages,
  ...techImages,
  ...companyImages,
  ...projectImages,
} as const;

// 为了保持向后兼容，同时导出单个变量
export {
  backend,
  // Project images
  carrent,
  close,
  creator,
  // Tech stack images
  css,
  docker,
  figma,
  git,

  github,
  html,
  javascript,
  jobit,
  // Base images
  logo,
  menu,
  // Company images
  meta,
  mobile,
  mongodb,
  nodejs,
  reactjs,
  redux,
  shopify,

  starbucks,
  tailwind,
  tesla,
  threejs,

  tripguide,
  typescript,
  web,
};
