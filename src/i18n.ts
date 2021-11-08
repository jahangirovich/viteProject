import Vue from 'vue'
import VueI18n, { LocaleMessages } from 'vue-i18n'
import importedMessages from '@/locales'
import { Locales } from '@/utility/constants/i18n'

Vue.use(VueI18n)

function loadLocaleMessages(): LocaleMessages {
  const locales = Object.keys(importedMessages)

  const messages: LocaleMessages = importedMessages
  locales.forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales[key]
    }
  })
  return messages
}

export default new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || Locales.ru,
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || Locales.ru,
  messages: loadLocaleMessages(),
})
