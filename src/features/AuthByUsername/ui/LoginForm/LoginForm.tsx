import React, { memo, useCallback, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import Button, { ThemeButton } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { useDispatch, useSelector } from 'react-redux'
import { loginActions } from '../../model/slice/loginSlice'
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState'
export interface LoginFormProps {
  className?: string
}

// eslint-disable-next-line react/prop-types
const LoginForm: FC<LoginFormProps> = memo(({ className }) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { username, password } = useSelector(getLoginState)

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value))
    },
    [dispatch]
  )

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value))
    },
    [dispatch]
  )

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input
        className={cls.input}
        type='text'
        placeholder={t('username')}
        autofocus
        onChange={onChangeUsername}
        value={username}
      />
      <Input
        className={cls.input}
        type='text'
        placeholder={t('password')}
        onChange={onChangePassword}
        value={password}
      />
      <Button theme={ThemeButton.OUTLINE} className={cls.loginBtn}>
        {t('enter')}
      </Button>
    </div>
  )
})

export default LoginForm
