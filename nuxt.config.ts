// https://nuxt.com/docs/api/configuration/nuxt-config
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: "123",
    // Keys within public are also exposed client-side
    public: {
      apiBase: "/api",
    },
  },
  // plugins: ["~/plugins/i18n.js"],
  modules: ["@nuxtjs/i18n",  '@element-plus/nuxt'],
  elementPlus: { locale: zhCn, },
  i18n: {
    vueI18n: './nuxt-i18n.js' // custom path example
  }
});
