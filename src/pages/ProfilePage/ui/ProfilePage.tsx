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
} from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import ProfilePageHeader from './ProfilePageHeader/ProfilePageHeader'
import { type Currency } from 'entities/Currency'
import { type Country } from 'entities/Country'

export interface ProfilePageProps {
  className?: string
}

const initialReducers: ReducerList = {
  profile: profileReducer,
}

const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
  const dispatch = useAppDispatch()
  const formData = useSelector(getProfileForm)
  const error = useSelector(getProfileError)
  const isLoading = useSelector(getProfileIsLoading)
  const readonly = useSelector(getProfileReadOnly)

  useEffect(() => {
    void dispatch(fetchProfileData())
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
