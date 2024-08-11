// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/i18n"],
  i18n: {
    vueI18n: './i18n.config.ts',
    locales: ['en', 'fr'],
    defaultLocale: 'en',
  }
})