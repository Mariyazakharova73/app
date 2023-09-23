import React, { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ProfilePage.module.scss'
import { useTranslation } from 'react-i18next'
import DynamicModuleLoader, {
  type ReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { profileReducer } from 'entities/Profile'

export interface ProfilePageProps {
  className?: string
}

const reducers: ReducerList = {
  profile: profileReducer,
}

const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
  const { t } = useTranslation()
  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnMount>
      <div className={classNames(cls.ProfilePage, {}, [className])}>
        {t('profile')}
      </div>
    </DynamicModuleLoader>
  )
}

export default ProfilePage
