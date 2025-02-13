/* eslint unicorn/filename-case: "off" */
export default {
  hero: {
    greeting: "Hi，我是",
    name: "曾庆嘉",
    role: "全栈开发工程师",
    description: "致力于构建现代Web应用",
  },
  about: {
    title: "关于我",
    subtitle: "简介",
    introduction: "作为一名全栈开发工程师，我在Web开发领域拥有丰富经验。我专注于构建高性能、可扩展的应用程序，并对新兴技术保持热忱。凭借深厚的前端开发专长和使用 Next.js 与 Hono.js 构建全栈应用的扎实背景，我同时具备丰富的云部署经验。我始终保持对新技术的学习热情，致力于提供最优的技术解决方案。",
    tags: {
      frontend: "前端开发工程师",
      quickLearner: "快速学习者",
      backend: "后端开发工程师",
      techEnthusiast: "技术爱好者",
    },
    professional: {
      title: "专业经验",
      description: "在2.5年的工作经验中，我在前端和后端开发领域不断提升技能，专注打造动态响应式网站。",
    },
    learning: {
      title: "持续学习",
      description: "我热衷于跟进最新的技术发展和最佳实践，通过实践项目和研究不断拓展知识领域。",
    },
    location: {
      title: "灵活的时区沟通与工作地点",
      description: "我目前在中国广州，可以接受全球远程工作。",
      languages: {
        english: "🇬🇧 专业英语水平 (PTE 63) - 擅长代码文档编写与异步沟通",
        mandarin: "🇨🇳 中文母语 - 具备技术本地化专长",
        cantonese: "🇭🇰 粤语母语 - 熟悉区域市场调适",
      },
    },
    passion: {
      title: "编程热忱",
      description: "我热爱通过代码解决问题和创造价值。编程不仅是我的职业，更是我的热情所在。我专注于编写清晰、可维护的代码，始终遵循最佳实践和设计原则。代码质量和可读性永远是我的首要考虑。",
    },
    resume: {
      downloadCv: "下载简历",
      downloading: "下载中...",
      downloadSuccess: "简历下载成功 📄",
      downloadError: "下载失败，请稍后重试 😢",
      downloadEnglish: "下载英文简历",
      downloadChinese: "下载中文简历",
    },
    contact: {
      title: "联系我",
    },
  },
  tech: {
    title: "技术栈",
  },
  experience: {
    title: "工作经历",
    items: {
      selfTaught: {
        title: "自学成才的前端开发之旅",
        desc: "我的前端开发之旅始于对学习和编程的热爱。作为一名自学者，我经常观看 Syntax、Wes Bos、Jack Herrington、Hamed Bahram、Dave Gray 等技术 YouTube 频道来深化知识（感谢他们提供很有价值的内容和指导）。通过实践应用，我在 React.js 和 JavaScript 方面培养了扎实的技能，同时通过阅读 Medium 和 DEV Community 的文章持续关注最新技术趋势。这种不懈的学习精神和对新技术的包容态度，使我成长为一名能力出众、适应力强的开发者。",
      },
      desktop: {
        title: "桌面应用开发者",
        desc: "使用 React.js 和 Electron 构建跨平台桌面应用。专注于性能优化以实现接近原生的体验，通过 WebSocket 实现实时功能，并使用 TypeScript 和 Zod 确保 API 集成的类型安全。",
      },
      freelance: {
        title: "自由职业应用开发项目",
        desc: "主导客户定制应用的完整开发生命周期。专注于构建可扩展和可维护的代码，同时确保最佳性能和用户参与度。",
      },
      lead: {
        title: "前端开发团队负责人",
        desc: "带领前端开发团队，使用 Next.js、Zustand 和 TailwindCSS 等现代前端技术设计和维护多个项目的用户界面功能。成功与后端团队协作，实现 API 集成和应用性能优化。",
      },
    },
  },
  works: {
    title: "近期项目",
    liveSite: "在线演示",
    projects: {
      slack: {
        title: "Slack 克隆版 - 视频通话实时聊天应用",
        des: "基于 Next.js、TailwindCSS、Tanstack Query、Framer Motion、Convex、Clerk、Stream 等技术，构建的实时团队通讯应用，支持点对点视频通话功能。",
      },
      estate: {
        title: "EstateHub - 房地产应用",
        des: "基于 Next.js、Kinde、Prisma、Supabase、Stripe 等技术，开发的一款允许用户搜索、添加/编辑/删除房产、查看房产详情并完成交易的房地产应用。",
      },
      note: {
        title: "NoteBot - AI智能笔记应用",
        des: "集成 AI 和 Pinecone vector embeddings的笔记应用，让用户能够智能地与笔记内容互动。",
      },
      cv: {
        title: "AICV - AI简历构建器 (monorepo)",
        des: "基于React.js、Tanstack Router, Tanstack Query、Hono.js、Drizzle orm、Auth.js 等技术并嵌入 AI 的简历构建器，根据职位描述和用户背景，帮助用户创建和优化精美的简历。",
      },
    },
  },
  contact: {
    title: "联系我",
    description: "无论是新建网站、优化现有平台，还是实现独特创意项目，我都能为您提供专业支持。",
    form: {
      name: {
        label: "姓名",
        placeholder: "例如：王小明",
      },
      email: {
        label: "电子邮箱",
        placeholder: "例如：wang@gmail.com",
      },
      message: {
        label: "留言内容",
        placeholder: "请分享您的想法或问题...",
      },
      submit: {
        sending: "发送中...",
        default: "发送消息",
      },
      success: "感谢您的留言 😃",
      error: "消息发送失败 😢",
    },
  },
} as const;
