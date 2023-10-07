import React, { memo, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleImageBlockComponent.module.scss'
import { type ArticleImageBlock } from '../../model/types/article'
import Text, { TextAlign } from 'shared/ui/Text/Text'

export interface ArticleImageBlockComponentProps {
  className?: string
  block: ArticleImageBlock
}

const ArticleImageBlockComponent: FC<ArticleImageBlockComponentProps> = ({
  className,
  block,
}) => {
  return (
    <div
      className={classNames(cls.ArticleImageBlockComponent, {}, [className])}
    >
      <img className={cls.img} src={block.src} alt={`${block.title}.`} />
      {block.title && <Text text={block.title} align={TextAlign.CENTER} />}
    </div>
  )
}

export default memo(ArticleImageBlockComponent)
