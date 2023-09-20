import { BugButton } from 'app/providers/ErrorBoundary'
import { Counter } from 'entities/Counter'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/Input/Input'

const MainPage = () => {
  const { t, i18n } = useTranslation('mainPage')
  const [value, setValue] = useState('')

  const onChange = (val: string) => {
    setValue(val)
  }
  return (
    <div>
      {t('main')}
      {/* <Counter/> */}
      {/* <BugButton /> */}
    </div>
  )
}

export default MainPage
