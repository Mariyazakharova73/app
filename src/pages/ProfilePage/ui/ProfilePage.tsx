import React, { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ProfilePage.module.scss'
import { useTranslation } from 'react-i18next'

export interface ProfilePageProps {
  className?: string
}

const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
  const { t } = useTranslation()
  return (
    // eslint-disable-next-line i18next/no-literal-string
    <div className={classNames(cls.ProfilePage, {}, [className])}>
      profile
    </div>
  )
}

export default ProfilePage
