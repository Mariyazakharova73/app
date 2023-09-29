import React, { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleDetails.module.scss'
import { useTranslation } from 'react-i18next'

export interface ArticleDetailsProps {
  className?: string
}

const ArticleDetails: FC<ArticleDetailsProps> = ({ className }) => {
  const { t } = useTranslation()
  return <div className={classNames(cls.ArticleDetails, {}, [className])}></div>
}

export default ArticleDetails
