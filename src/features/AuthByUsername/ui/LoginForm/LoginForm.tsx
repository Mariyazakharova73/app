import React, { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import Button from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'

export interface LoginFormProps {
  className?: string
}

const LoginForm: FC<LoginFormProps> = ({ className }) => {
  const { t } = useTranslation()
  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input
        className={cls.input}
        type='text'
        placeholder={t('username')}
        autofocus
      />
      <Input className={cls.input} type='text' placeholder={t('password')} />
      <Button className={cls.loginBtn}>{t('enter')}</Button>
    </div>
  )
}

export default LoginForm
