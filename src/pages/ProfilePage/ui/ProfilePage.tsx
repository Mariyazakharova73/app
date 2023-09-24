import React, { useEffect, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ProfilePage.module.scss'
import DynamicModuleLoader, {
  type ReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

export interface ProfilePageProps {
  className?: string
}

const initialReducers: ReducerList = {
  profile: profileReducer,
}

const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    void dispatch(fetchProfileData())
  }, [dispatch])

  return (
    <DynamicModuleLoader removeAfterUnMount reducers={initialReducers}>
      <div className={classNames(cls.ProfilePage, {}, [className])}>
        <ProfileCard/>
      </div>
    </DynamicModuleLoader>
  )
}

export default ProfilePage
