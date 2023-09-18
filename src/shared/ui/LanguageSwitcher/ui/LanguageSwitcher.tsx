import React, { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import Button, { ThemeButton } from 'shared/ui/Button/Button'
import cls from './LanguageSwitcher.module.scss'

export interface LanguageSwitcherProps {
  className?: string
}

const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation()

  const toggle = async () => {
    await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <Button
      className={classNames('', {}, [className])}
      theme={ThemeButton.CLEAR}
      onClick={toggle}
    >
      {t('language')}
    </Button>
  )
}

export default LanguageSwitcher