/* eslint-disable @typescript-eslint/indent */
import React, { memo, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './CommentList.module.scss'
import Text from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import CommentCard from '../CommentCard/CommentCard'
import { type Comment } from '../../model/types/comment'

export interface CommentListProps {
  className?: string
  comments?: Comment[]
  isLoading?: boolean
}

const CommentList: FC<CommentListProps> = ({
  className,
  isLoading,
  comments,
}) => {
  const { t } = useTranslation('articlesPage')
  return (
    <div className={classNames(cls.CommentList, {}, [className])}>
      {comments?.length
        ? (
          comments.map((comment) => <CommentCard
            className={cls.comment}
            key={comment.id}
            comment={comment}
            isLoading={isLoading}/>))
        : (
          <Text text={t('no-comments')} />)}
    </div>
  )
}

export default memo(CommentList)
