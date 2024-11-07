// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "nuxt-icon",
    "@nuxtjs/color-mode",
    "@nuxtjs/i18n",
    "@nuxt/image"
  ],
  plugins: ["~/plugins/eventBus.ts"],
  i18n: {
    defaultLocale: "pt-BR",
    locales: [
      {
        code: "en-US",
        name: "English",
        iso: "en-US",
        dir: "ltr",
        file: "./lang/en-US.ts"
      },
      {
        code: "pt-BR",
        name: "Brazilian Portuguese",
        iso: "pt-BR",
        dir: "ltr",
        file: "./lang/pt-BR.ts"
      }
    ],
  }
});