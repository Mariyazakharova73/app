import React from 'react'
import { useTranslation } from 'react-i18next'

const AboutPage = () => {
  const { t, i18n } = useTranslation('aboutPage')
  return <div>{t('about')}</div>
}

export default AboutPage
