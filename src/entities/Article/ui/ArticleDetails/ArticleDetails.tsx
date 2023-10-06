import React, { memo, useEffect, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleDetails.module.scss'
import { useTranslation } from 'react-i18next'
import DynamicModuleLoader, {
  type ReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { fetchArticleById } from './../../model/sevices/fetchArticleById'
import { useSelector } from 'react-redux'
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from 'entities/Article/model/selectors/articleDetails'
import Text, { TextAlign, TextSize } from 'shared/ui/Text/Text'
import Skeleton from 'shared/ui/Skeleton/ui/Skeleton'
import Avatar from 'shared/ui/Avatar/Avatar'
import EyeIcon from 'shared/assets/icons/eye.svg'
import DateIcon from 'shared/assets/icons/date.svg'

export interface ArticleDetailsProps {
  className?: string
  id: string
}

const reducers: ReducerList = {
  articleDetails: articleDetailsReducer,
}

const ArticleDetails: FC<ArticleDetailsProps> = ({ className, id }) => {
  const { t } = useTranslation('articlesPage')
  const dispatch = useAppDispatch()
  const isLoading = useSelector(getArticleDetailsIsLoading)
  const article = useSelector(getArticleDetailsData)
  const error = useSelector(getArticleDetailsError)

  useEffect(() => {
    dispatch(fetchArticleById(id))
  }, [dispatch, id])

  let content

  if (isLoading) {
    content = (
      <>
        <Skeleton
          className={cls.avatar}
          width={200}
          height={200}
          border={'50%'}
        />
        <Skeleton className={cls.title} width={300} height={32} />
        <Skeleton className={cls.skeleton} width={600} height={24} />
        <Skeleton className={cls.skeleton} width={'100%'} height={200} />
        <Skeleton className={cls.skeleton} width={'100%'} height={200} />
      </>
    )
  } else if (error) {
    content = <Text align={TextAlign.CENTER} title={t('article-error')} />
  } else {
    content = (
      <>
        <div className={cls.avatarWrapper}>
          <Avatar size={200} src={article?.img} className={cls.avatar} />
        </div>
        <Text
          className={cls.title}
          title={article?.title}
          text={article?.subtitle}
          size={TextSize.L}
        />
        <div className={cls.articleInfo}>
          <EyeIcon className={cls.icon}/>
          <Text text={String(article?.views)} />
        </div>
        <div className={cls.articleInfo}>
          <DateIcon className={cls.icon}/>
          <Text text={article?.createdAt} />
        </div>
      </>
    )
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnMount>
      <div className={classNames(cls.ArticleDetails, {}, [className])}>
        {content}
      </div>
    </DynamicModuleLoader>
  )
}

export default memo(ArticleDetails)
