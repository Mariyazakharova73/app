import { useTranslation } from 'react-i18next'

const MainPage = () => {
  const { t } = useTranslation('mainPage')

  return (
    <div>
      {t('main')}
      {/* <Counter/> */}
      {/* <BugButton /> */}
    </div>
  )
}

export default MainPage
