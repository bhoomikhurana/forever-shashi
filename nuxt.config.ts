export default defineNuxtConfig({
  devtools: { enabled: true },
  builder: "webpack",
  webpack: {
    // extractCSS: {
    //   ignoreOrder: true,
    // },
    
    use: ['style-loader', 'css-loader']
    
    
  },
});
