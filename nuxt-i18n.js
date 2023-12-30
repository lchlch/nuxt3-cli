import en from '../locales/en.js'
import fr from '../locales/zhCn.js'

// You can use `defineI18nConfig` to get type inferences for options to pass to vue-i18n.
export default defineI18nConfig(() => {
  const route = useRoute();
  console.log(route.query.lang);
  const curLang = route.query.lang || 'en'
  return {
    legacy: false,
    locale: curLang,
    messages: {
      en,
      fr
    }
  }
})