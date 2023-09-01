// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '@/assets/style.scss'
  ],
  app: {
    head: {
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com" },
        { href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap", rel: "stylesheet" },
      ],
      title: "Forever Shashi Foundation",
      meta: [
        { property: 'og:title', content: 'Forever Shashi Foundation' },
        { property: 'og:description', content: 'Forever Shashi Foundation (FSF) is a registered pan-India NGO with the aim to educate and empower adolescents and youth on various social and environmental issues. We employ experiential and participatory learning approaches via workshops, training, campaigns and community building activities to impact change.' },
        { property: 'og:url', content: 'https://forevershashifoundation.com/' },
        { property: 'og:image', content: 'https://ik.imagekit.io/fawaazfaris/forever-shashi/forever-shashi/forever-shashi-logo.png' },
      ]
    }
  }
})
