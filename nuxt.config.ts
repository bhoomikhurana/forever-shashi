export default defineNuxtConfig({
  devtools: { enabled: true },
  builder: "webpack",
  css: ["~/assets/main.css"],
  plugins: [{ src: "~/plugins/scroll-behavior.client.ts", mode: "client" }],

  webpack: {
    extractCSS: true,
    loaders: {
      vue: {
        hotReload: true,
      },
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: "styles",
            test: /\.(css|vue)$/,
            chunks: "all",
            enforce: true,
          },
        },
      },
    },
  },
});
