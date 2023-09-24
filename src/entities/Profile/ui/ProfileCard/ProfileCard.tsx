import React, { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ProfileCard.module.scss'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getProfileData } from './../../model/selectors/getProfileData/getProfileData'
import { getLoginIsLoading } from './../../../../features/AuthByUsername/model/selectors/getLoginIsLoading/getLoginIsLoading'
import { getProfileError } from './../../model/selectors/getProfileError/getProfileError'
import Text from 'shared/ui/Text/Text'
import Button, { ThemeButton } from 'shared/ui/Button/Button'
import Input from 'shared/ui/Input/Input'

export interface ProfileCardProps {
  className?: string
}

const ProfileCard: FC<ProfileCardProps> = ({ className }) => {
  const { t } = useTranslation('profilePage')
  const data = useSelector(getProfileData)
  const error = useSelector(getLoginIsLoading)
  const isLoading = useSelector(getProfileError)
  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div className={cls.header}>
        <Text title={t('profile')} />
        <Button className={cls.editBtn} theme={ThemeButton.OUTLINE}>{t('edit')}</Button>
      </div>
      <div className={cls.data}>
        <Input
          className={cls.input}
          value={data?.first}
          placeholder={t('firstName')}
        />
        <Input
          className={cls.input}
          value={data?.lastname}
          placeholder={t('lastName')}
        />
      </div>
    </div>
  )
}

export default ProfileCard
