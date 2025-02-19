export default function manifest() {
  return {
    name: "Portfolio of Qingjia Tsang",
    short_name: "QingjiaTsang",
    description: "Portfolio of Qingjia Tsang",
    start_url: "/",
    display: "standalone",
    background_color: "#050816",
    theme_color: "#050816",
    icons: [
      {
        src: "/favicon/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: "/favicon/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/favicon/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/favicon/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
