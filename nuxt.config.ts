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

  modules: ['@nuxtjs/google-fonts'],

  googleFonts: {
    families: {
      Anybody: [400, 700],
      Roboto: [300, 400, 700],
    },
  },

  app: {
    head: {
      bodyAttrs: {
        class: 'font-primary',
      },
    },
  },
})
