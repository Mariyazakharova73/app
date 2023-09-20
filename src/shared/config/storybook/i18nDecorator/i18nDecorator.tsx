import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import React, { Suspense } from 'react'
import { I18nextProvider } from 'react-i18next'

void i18n
  .use(Backend) // lazy loads translations from /public/locales
  .use(LanguageDetector) // detect user language
  .init({
    fallbackLng: 'ru',
    debug: true,
    interpolation: {
      escapeValue: false
    }
  })

export const i18nDecorator = (Story: any) => {
  return (
    <Suspense fallback={<div>loading translations...</div>}>
      <I18nextProvider i18n={i18n}>
        <Story />
      </I18nextProvider>
    </Suspense>
  )
}
