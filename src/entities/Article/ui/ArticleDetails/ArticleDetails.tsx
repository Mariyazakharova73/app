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
import Text, { TextAlign } from 'shared/ui/Text/Text'
import Skeleton from 'shared/ui/Skeleton/ui/Skeleton'

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
  // const isLoading = useSelector(getArticleDetailsIsLoading)
  const isLoading = true
  const article = useSelector(getArticleDetailsData)
  const error = useSelector(getArticleDetailsError)

  useEffect(() => {
    dispatch(fetchArticleById(id))
  }, [dispatch, id])

  let content

  if (isLoading) {
    content = (
      <div>
        <Skeleton className={cls.avatar} width={200} height={200} border={'50%'} />
        <Skeleton className={cls.title} width={300} height={32} />
        <Skeleton className={cls.skeleton} width={600} height={24} />
        <Skeleton className={cls.skeleton} width={'100%'} height={200} />
        <Skeleton className={cls.skeleton} width={'100%'} height={200} />
      </div>
    )
  } else if (error) {
    content = <Text align={TextAlign.CENTER} title={t('article-error')} />
  } else {
    content = (
      // eslint-disable-next-line i18next/no-literal-string
      <div className={classNames(cls.ArticleDetails, {}, [className])}>
        ArticleDetails
      </div>
    )
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnMount>
      {content}
    </DynamicModuleLoader>
  )
}

export default memo(ArticleDetails)
