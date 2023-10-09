import React, { memo, useCallback, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AddCommentForm.module.scss'
import { useTranslation } from 'react-i18next'
import Input from 'shared/ui/Input/Input'
import Button, { ThemeButton } from 'shared/ui/Button/Button'
import { useSelector } from 'react-redux'
import {
  getAddCommentFormError,
  getAddCommentFormText,
} from 'features/addCommentForm/model/selectors/addCommentFormSelectors'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import {
  addCommentFormActions,
  addCommentFormReducer,
} from '../../model/slices/addCommentFormSlice'
import DynamicModuleLoader, {
  type ReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

export interface AddCommentsFormProps {
  className?: string
  onSendComment: (text: string) => void
}

const reducers: ReducerList = {
  addCommentForm: addCommentFormReducer,
}

const AddCommentForm: FC<AddCommentsFormProps> = ({
  className,
  onSendComment,
}) => {
  const { t } = useTranslation('articlesPage')
  const text = useSelector(getAddCommentFormText)
  const error = useSelector(getAddCommentFormError)
  const dispatch = useAppDispatch()

  const onCommentTextChange = useCallback(
    (value: string) => {
      dispatch(addCommentFormActions.setText(value))
    },
    [dispatch]
  )

  const onSendHandler = useCallback(() => {
    onSendComment(text || '')
    onCommentTextChange('')
  }, [onCommentTextChange, onSendComment, text])

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(cls.AddCommentForm, {}, [className])}>
        <Input
          className={cls.input}
          placeholder={t('commentText')}
          value={text}
          onChange={onCommentTextChange}
        />
        <Button onClick={onSendHandler} theme={ThemeButton.OUTLINE}>
          {t('sendBtn')}
        </Button>
      </div>
    </DynamicModuleLoader>
  )
}

export default memo(AddCommentForm)
