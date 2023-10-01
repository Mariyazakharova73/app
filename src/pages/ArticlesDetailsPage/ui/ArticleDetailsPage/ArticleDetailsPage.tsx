import React, { memo, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleDetailsPage.module.scss'
import { useTranslation } from 'react-i18next'
import { ArticleDetails } from 'entities/Article'
import { useParams } from 'react-router-dom'

export interface ArticleDetailsPageProps {
  className?: string
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ className }) => {
  const { t } = useTranslation()
  const { id } = useParams<{ id: string }>()

  if (!id) {
    return (
      <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <div>{t('not-found-article')}</div>
      </div>
    )
  }
  return (
    <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
      <ArticleDetails id={id} />
    </div>
  )
}

export default memo(ArticleDetailsPage)
