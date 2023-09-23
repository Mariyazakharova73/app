import React, { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Profile.module.scss'
import { useTranslation } from 'react-i18next'

export interface ProfileProps {
  className?: string
}

const Profile: FC<ProfileProps> = ({ className }) => {
  const { t } = useTranslation()
  return <div className={classNames(cls.Profile, {}, [className])}></div>
}

export default Profile
