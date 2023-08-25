export default defineNuxtConfig({
  devtools: { enabled: true },
  builder: "webpack",
  css: ["~/assets/main.css", "@fortawesome/fontawesome-svg-core/styles.css"],
  modules: ["nuxt-icons"],
  // components: {
  //   global: true,
  //   dirs: ["~/components/Utilities"],
  // },

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
