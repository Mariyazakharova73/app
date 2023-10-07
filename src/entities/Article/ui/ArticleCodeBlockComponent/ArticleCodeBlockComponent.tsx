import React, { memo, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleCodeBlockComponent.module.scss'
import { type ArticleCodeBlock } from './../../model/types/article'
import Code from 'shared/ui/Code/Code'

export interface ArticleCodeBlockComponentProps {
  className?: string
  block: ArticleCodeBlock
}

const ArticleCodeBlockComponent: FC<ArticleCodeBlockComponentProps> = ({
  className,
  block,
}) => {
  return (
    <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
      <Code text={block.code}/>
    </div>
  )
}

export default memo(ArticleCodeBlockComponent)
