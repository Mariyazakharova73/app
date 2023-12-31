import React, { memo, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './CommentCard.module.scss'
import { type Comment } from '../../model/types/comment'
import Avatar from 'shared/ui/Avatar/Avatar'
import Text from 'shared/ui/Text/Text'
import Skeleton from 'shared/ui/Skeleton/ui/Skeleton'
import AppLink from 'shared/ui/AppLink/AppLink'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

export interface CommentCardProps {
  className?: string
  comment: Comment
  isLoading?: boolean
}

const CommentCard: FC<CommentCardProps> = ({
  className,
  comment,
  isLoading,
}) => {
  if (isLoading) {
    return (
      <div className={classNames(cls.CommentCard, {}, [className])}>
        <div className={cls.header}>
          <Skeleton width={30} height={30} border='50%' />
          <Skeleton className={cls.username} width={100} height={16} />
        </div>
        <Skeleton className={cls.text} width={'100%'} height={50} />
      </div>
    )
  }
  return (
    <div className={classNames(cls.CommentCard, {}, [className])}>
      <AppLink className={cls.header} to={`${RoutePath.profile}${comment.user.id}`}>
        {comment.user.avatar && <Avatar size={30} src={comment.user.avatar} />}
        <Text className={cls.username} title={comment.user.username} />
      </AppLink>
      <Text className={cls.text} text={comment.text} />
    </div>
  )
}

export default memo(CommentCard)
