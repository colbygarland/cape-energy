// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ['@nuxtjs/google-fonts', 'nuxt-gtag'],

  googleFonts: {
    families: {
      Anybody: [400, 700],
      Roboto: [300, 400, 700],
    },
  },

  gtag: {
    id: 'G-3T918ZR7PE',
  },

  app: {
    head: {
      title: 'Cape Energy Group - Innovative Energy Solutions',

      bodyAttrs: {
        class: 'font-primary',
      },
    },
  },
})
