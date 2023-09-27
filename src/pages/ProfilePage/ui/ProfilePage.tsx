import React, { useEffect, useCallback, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import DynamicModuleLoader, {
  type ReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {
  fetchProfileData,
  getProfileForm,
  getProfileError,
  getProfileIsLoading,
  getProfileReadOnly,
  profileActions,
  ProfileCard,
  profileReducer,
  getProfileValidateErrors,
} from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import ProfilePageHeader from './ProfilePageHeader/ProfilePageHeader'
import { type Currency } from 'entities/Currency'
import { type Country } from 'entities/Country'
import Text, { TextTheme } from 'shared/ui/Text/Text'
import { validateProfileError } from 'entities/Profile/model/types/profile'
import { useTranslation } from 'react-i18next'

export interface ProfilePageProps {
  className?: string
}

const initialReducers: ReducerList = {
  profile: profileReducer,
}

const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
  const { t } = useTranslation('profilePage')
  const dispatch = useAppDispatch()
  const formData = useSelector(getProfileForm)
  const error = useSelector(getProfileError)
  const isLoading = useSelector(getProfileIsLoading)
  const readonly = useSelector(getProfileReadOnly)
  const validateErrors = useSelector(getProfileValidateErrors)

  const validateErrorsTranslates = {
    [validateProfileError.SERVER_ERROR]: t('serverError'),
    [validateProfileError.INCORRECT_AGE]: t('incorrectAge'),
    [validateProfileError.INCORRECT_CITY]: t('incorrectCity'),
    [validateProfileError.INCORRECT_USER_DATA]: t('incorrectUser'),
    [validateProfileError.NO_DATA]: t('noData'),
  }

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      void dispatch(fetchProfileData())
    }
  }, [dispatch])

  const onChange = useCallback(
    (value?: string | number, name?: string) => {
      if (name) {
        dispatch(profileActions.updateProfile({ [name]: value }))
      }
    },
    [dispatch]
  )

  const onChangeCurrency = useCallback(
    (value?: Currency) => {
      dispatch(profileActions.updateProfile({ currency: value }))
    },
    [dispatch]
  )

  const onChangeCountry = useCallback(
    (value?: Country) => {
      dispatch(profileActions.updateProfile({ country: value }))
    },
    [dispatch]
  )

  return (
    <DynamicModuleLoader removeAfterUnMount reducers={initialReducers}>
      <div className={classNames('', {}, [className])}>
        <ProfilePageHeader />
        {validateErrors?.length &&
          validateErrors.map((err) => (
            <Text
              key={err}
              theme={TextTheme.ERROR}
              text={validateErrorsTranslates[err]}
            />
          ))}
        <ProfileCard
          onChange={onChange}
          data={formData}
          error={error}
          isLoading={isLoading}
          readonly={readonly}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
        />
      </div>
    </DynamicModuleLoader>
  )
}

export default ProfilePage
