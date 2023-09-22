import React, { memo, useCallback, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import Button, { ThemeButton } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { useSelector } from 'react-redux'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import { loginByUsername } from './../../model/services/loginByUsername/loginByUsername'
import Text, { TextTheme } from 'shared/ui/Text/Text'
import { getLoginUsername } from './../../model/selectors/getLoginUsername/getLoginUsername'
import { getLoginPassword } from './../../model/selectors/getLoginPassword/getLoginPassword'
import { getLoginError } from './../../model/selectors/getLoginError/getLoginError'
import { getLoginIsLoading } from './../../model/selectors/getLoginIsLoading/getLoginIsLoading'
import DynamicModuleLoader, {
  type ReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
export interface LoginFormProps {
  className?: string
  onSuccess: () => void
}

// редюсеры, которые нужно добавлять асинхронно
// вынесли из комп, чтобы не создавалась новая ссылка при каждом рендере
const initialReducers: ReducerList = {
  loginForm: loginReducer,
}

// eslint-disable-next-line react/prop-types
const LoginForm: FC<LoginFormProps> = memo(({ className, onSuccess }) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const username = useSelector(getLoginUsername)
  const password = useSelector(getLoginPassword)
  const error = useSelector(getLoginError)
  const isLoading = useSelector(getLoginIsLoading)

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

  const onLoginClick = useCallback(async () => {
    const res = await dispatch(loginByUsername({ username, password }))
    if (res.meta.requestStatus === 'fulfilled') {
      onSuccess()
    }
  }, [dispatch, username, password, onSuccess])

  return (
    <DynamicModuleLoader
      removeAfterUnMount
      name='loginForm'
      reducers={initialReducers}
    >
      <div className={classNames(cls.LoginForm, {}, [className])}>
        <Text title={t('formTitle')} />
        {error && (
          <Text text={t('loginErrorMessage')} theme={TextTheme.ERROR} />
        )}
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
        <Button
          theme={ThemeButton.OUTLINE}
          className={cls.loginBtn}
          onClick={onLoginClick}
          disabled={isLoading}
        >
          {t('enter')}
        </Button>
      </div>
    </DynamicModuleLoader>
  )
})

export default LoginForm
