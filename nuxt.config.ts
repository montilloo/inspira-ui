// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  plugins: [{ src: "~/plugins/clarity.js", mode: "client" }],

  modules: ["@nuxt/image", "nuxt-gtag", "@vueuse/motion/nuxt", "@nuxt/eslint"],

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  runtimeConfig: {
    public: {
      NUXT_CLARITY_ID: process.env.NUXT_CLARITY_ID,
    },
  },

  eslint: {
    config: {
      standalone: false,
    },
  },

  extends: ["shadcn-docs-nuxt"],
  compatibilityDate: "2024-07-06",
});
