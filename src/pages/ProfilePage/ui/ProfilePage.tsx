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
        />
      </div>
    </DynamicModuleLoader>
  )
}

export default ProfilePage
