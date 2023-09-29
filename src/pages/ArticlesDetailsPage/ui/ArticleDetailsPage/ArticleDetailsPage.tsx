import React, { memo, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleDetailsPage.module.scss'
import { useTranslation } from 'react-i18next'

export interface ArticleDetailsPageProps {
  className?: string
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ className }) => {
  const { t } = useTranslation()
  return (
    // eslint-disable-next-line i18next/no-literal-string
    <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
      ArticleDetailsPage
    </div>
  )
}

export default memo(ArticleDetailsPage)
