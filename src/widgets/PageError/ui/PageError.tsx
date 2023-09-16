import React, { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './PageError.module.scss'
import { useTranslation } from 'react-i18next'
import Button from 'shared/ui/Button/Button'

export interface PageErrorProps {
  className?: string
}

const PageError: FC<PageErrorProps> = ({ className }) => {
  const { t } = useTranslation()

  const reloadPage = () => {
    location.reload()
  }

  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <p>{t('error')}</p>
      <Button onClick={reloadPage}>{t('update-page')}</Button>
    </div>
  )
}

export default PageError
