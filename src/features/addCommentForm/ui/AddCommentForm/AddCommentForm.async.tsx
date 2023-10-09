import { type FC, lazy } from 'react'
import { type AddCommentsFormProps } from './AddCommentForm'

export const AddCommentFormAsync = lazy<FC<AddCommentsFormProps>>(
  async () => await import('./AddCommentForm')
)
