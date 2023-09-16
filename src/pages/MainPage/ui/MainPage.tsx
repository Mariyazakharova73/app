import { BugButton } from 'app/providers/ErrorBoundary'
import React from 'react'
import { useTranslation } from 'react-i18next'

const MainPage = () => {
  const { t, i18n } = useTranslation('mainPage')
  return (
    <div>
      {t('main')}
      <BugButton />
    </div>
  )
}

export default MainPage
