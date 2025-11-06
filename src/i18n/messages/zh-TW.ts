/* eslint unicorn/filename-case: "off" */
export default {
  metadata: {
    title: "曾慶嘉 | 全端開發工程師",
    description: "曾慶嘉的個人作品集 - 專注於現代網路技術的全端開發工程師",
    keywords: "全端開發,前端開發,React,Next.js,TypeScript,Hono.js",

    ogImage: "/assets/og-image-zh-TW.png",
    ogTitle: "曾慶嘉 | 全端開發工程師",
    ogDescription: "曾慶嘉的個人作品集 - 專注於現代網路技術的全端開發工程師",
    ogImageAlt: "曾慶嘉的個人作品集",

    twitterTitle: "曾慶嘉 | 全端開發工程師",
    twitterDescription: "曾慶嘉的個人作品集 - 專注於現代網路技術的全端開發工程師",
  },
  hero: {
    greeting: "Hi，我是",
    name: "曾慶嘉",
    role: "全端開發工程師",
    description: "致力於建構現代Web應用",
  },
  about: {
    title: "關於我",
    subtitle: "簡介",
    introduction: "我是一名全端開發人員，在Web開發方面擁有豐富的經驗。我專注於建立高效能、可擴展的應用程序，並對新興技術充滿熱情。憑藉前端開發的專業知識和使用Next.js和Hono.js建立全端應用程式的強大背景，我在雲端部署方面也有豐富的經驗。我保持不斷學習新技術的動力，並致力於提供最佳的技術解決方案。",
    tags: {
      frontend: "前端開發工程師",
      quickLearner: "快速學習者",
      backend: "後端開發工程師",
      techEnthusiast: "技術愛好者",
    },
    professional: {
      title: "專業經驗",
      description: "在超過3年的工作經驗中，我在前端和後端開發方面都積累了豐富的經驗，創建了多個動態和響應式網站。",
    },
    learning: {
      title: "持續學習",
      description: "我熱衷於跟進新興技術和最佳實踐，通過實踐項目和研究不斷擴展我的知識。",
    },
    location: {
      title: "我能夠靈活適應不同時區的溝通需求",
      description: "我目前在中國廣州，樂意接受全球遠程工作。",
      languages: {
        english: "🇬🇧 專業英語 (PTE 63) - 程式碼文檔和非同步溝通",
        mandarin: "🇨🇳 母語普通話 - 技術本地化專長",
        cantonese: "🇭🇰 母語粵語 - 區域市場適配",
      },

    },
    passion: {
      title: "我對程式設計的熱情",
      description: "我熱愛通過程式碼解決問題和創造產品。程式設計不僅是我的職業，更是我的熱情所在。我致力於編寫遵循最佳實踐和設計原則的整潔、可維護的程式碼。程式碼質量和可讀性始終是我的首要考慮。",
    },
    resume: {
      downloadCv: "下載履歷",
      downloading: "下載中...",
      downloadSuccess: "履歷下載成功 📄",
      downloadError: "下載失敗，請稍後再試 😢",
      downloadEnglish: "下載英文履歷",
      downloadChinese: "下載中文履歷",
    },
    contact: {
      title: "聯絡我",
    },
  },
  tech: {
    title: "技術棧",
  },
  experience: {
    title: "工作經歷",
    items: {
      selfTaught: {
        title: "自學前端開發之旅",
        desc: "我的前端開發之旅始於對程式設計的熱情。作為一名自學者，我經常觀看技術 YouTube 頻道，如 Syntax、Wes Bos、Jack Herrington、Hamed Bahram、Dave Gray 等，以加深知識（感謝他們提供很有價值的內容和指導）。通過實踐應用，我在 React.js 和 JavaScript 方面培養了紮實的技能，同時通過閱讀 Medium 和 DEV Community 上的文章來跟進最新的技術趨勢。這種不懈的學習精神和對新技術的接納態度使我成為了一名能力出眾且適應力強的開發者。",
      },
      desktop: {
        title: "桌面應用開發工程師",
        desc: "使用 React.js 和 Electron 構建跨平台桌面應用。專注於效能優化以實現類原生體驗，通過 WebSocket 實現即時功能，並使用 TypeScript 和 Zod 進行類型安全的 API 整合。",
      },
      freelance: {
        title: "自由職業應用開發項目",
        desc: "負責客戶定制應用程式的完整開發生命週期。專注於構建可擴展和可維護的程式碼，同時確保最佳效能和用戶參與度。",
      },
      lead: {
        title: "前端開發團隊負責人",
        desc: "帶領前端開發團隊，使用 Next.js、Zustand 和 TailwindCSS 等現代前端技術設計和維護面向用戶的功能。成功與後端團隊合作整合 API 並優化應用程式效能。",
      },
    },
  },
  works: {
    title: "近期專案",
    liveSite: "線上演示",
    projects: {
      slack: {
        title: "Slack 克隆版 - 帶視訊通話的即時聊天應用",
        des: "基於 Next.js、TailwindCSS、Tanstack Query、Framer Motion 和 Convex 建立的即時團隊通訊應用，支援點對點視訊通話功能。",
      },
      estate: {
        title: "EstateHub - 房地產應用",
        des: "基於 Next.js、Kinde、Prisma、Supabase、Stripe 等技術，開發的一款允許用戶搜尋、新增/編輯/刪除房產、查看房產詳情並完成交易的房地產應用。",
      },
      note: {
        title: "NoteBot - AI 筆記應用",
        des: "整合 AI 和 Pinecone vector embeddings的筆記應用，讓使用者能夠智慧地與筆記內容互動。",
      },
      cv: {
        title: "AICV - AI 簡歷生成器 (monorepo)",
        des: "基於React.js、Tanstack Router, Tanstack Query、Hono.js、Drizzle orm、Auth.js 等技術並嵌入 AI 的簡歷建立器，根據職位描述和用戶背景，幫助用戶創建和優化精美的簡歷。",
      },
    },
  },
  contact: {
    title: "聯絡我",
    description: "無論是新建網站、優化現有平台，或是實現獨特創意專案，我都能提供專業支援。",
    form: {
      name: {
        label: "姓名",
        placeholder: "例如：王小明",
      },
      email: {
        label: "電子郵件",
        placeholder: "例如：wang@gmail.com",
      },
      message: {
        label: "訊息",
        placeholder: "分享您的想法或問題...",
      },
      submit: {
        sending: "發送中...",
        default: "發送訊息",
      },
      success: "感謝您的訊息 😃",
      error: "訊息發送失敗 😢",
    },
  },
} as const;
