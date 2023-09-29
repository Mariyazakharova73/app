import React, { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleImageBlockComponent.module.scss'
import { useTranslation } from 'react-i18next'

export interface ArticleImageBlockComponentProps {
  className?: string
}

const ArticleImageBlockComponent: FC<ArticleImageBlockComponentProps> = ({
  className,
}) => {
  const { t } = useTranslation()
  return (
    <div
      className={classNames(cls.ArticleImageBlockComponent, {}, [className])}
    ></div>
  )
}

export default ArticleImageBlockComponent
