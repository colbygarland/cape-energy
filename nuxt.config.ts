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

  modules: ['@nuxtjs/google-fonts', "vue3-carousel-nuxt"],

  googleFonts: {
    families: {
      Roboto: [400, 700],
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