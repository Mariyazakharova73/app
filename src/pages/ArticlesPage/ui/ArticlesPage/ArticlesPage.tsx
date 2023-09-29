import React, { memo, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticlesPage.module.scss'
import { useTranslation } from 'react-i18next'

export interface ArticlesPageProps {
  className?: string
}

const ArticlesPage: FC<ArticlesPageProps> = ({ className }) => {
  const { t } = useTranslation('articlesPAge')
  return (
    // eslint-disable-next-line i18next/no-literal-string
    <div className={classNames(cls.ArticlesPage, {}, [className])}>
      ArticlesPage
    </div>
  )
}

export default memo(ArticlesPage)
