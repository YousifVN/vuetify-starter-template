/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

import en from '../locale/en.json'
import ar from '../locale/ar.json'

// Plugins
import vuetify from './vuetify'
import pinia from '../stores'
import router from '../router'
import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  locale: localStorage.getItem('locale') || 'en',
  messages: {
    en: en,
    ar: ar,
  }
})

// Types
import type { App } from 'vue'

export function registerPlugins (app: App) {
  app
    .use(vuetify)
    .use(router)
    .use(pinia)
    .use(i18n)
}
