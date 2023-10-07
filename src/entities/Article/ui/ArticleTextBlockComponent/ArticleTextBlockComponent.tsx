import React, { memo, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleTextBlockComponent.module.scss'
import { useTranslation } from 'react-i18next'
import { type ArticleTextBlock } from '../../model/types/article'
import Text from 'shared/ui/Text/Text'

export interface ArticleTextBlockComponentProps {
  className?: string
  block: ArticleTextBlock
}

const ArticleTextBlockComponent: FC<ArticleTextBlockComponentProps> = ({
  className,
  block,
}) => {
  const { t } = useTranslation()
  return (
    <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
      {block.title && <Text title={block.title} className={cls.title} />}
      {block.paragraphs.map((item, index) => (
        <Text key={index} text={item} className={cls.paragraph} />
      ))}
    </div>
  )
}

export default memo(ArticleTextBlockComponent)
