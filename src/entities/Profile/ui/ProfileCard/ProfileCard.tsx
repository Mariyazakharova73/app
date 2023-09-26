import React, { type FC } from 'react'
import { classNames, type Mods } from 'shared/lib/classNames/classNames'
import cls from './ProfileCard.module.scss'
import { useTranslation } from 'react-i18next'
import Text, { TextAlign, TextTheme } from 'shared/ui/Text/Text'
import Input from 'shared/ui/Input/Input'
import { type Profile } from '../../model/types/profile'
import { Loader } from 'shared/ui/Loader'

export interface ProfileCardProps {
  className?: string
  data?: Profile
  error?: string
  isLoading?: boolean
  onChange: (value?: string, name?: string) => void
  readonly?: boolean
}

const ProfileCard: FC<ProfileCardProps> = ({
  className,
  data,
  error,
  isLoading,
  onChange,
  readonly,
}) => {
  const { t } = useTranslation('profilePage')
  if (isLoading) {
    return (
      <div
        className={classNames(cls.ProfileCard, {}, [className, cls.loading])}
      >
        <Loader />
      </div>
    )
  }

  if (error) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <Text
          theme={TextTheme.ERROR}
          title={t('profileError')}
          text={t('profileErrorText')}
          align={TextAlign.CENTER}
        />
      </div>
    )
  }

  const mods: Mods = {
    [cls.readonly]: readonly,
  }

  let dataArr: string[] | null = null
  if (data) {
    dataArr = Object.keys(data)
  }

  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div className={cls.header}></div>
      <div className={cls.data}>
        {dataArr?.map((item: string) => {
          return (
            <Input
              className={classNames(cls.input, mods, [className])}
              key={item}
              value={data ? data[item as keyof Profile] : ''}
              placeholder={t(item)}
              onChange={onChange}
              readonly={readonly}
              name={item}
            />
          )
        })}
      </div>
    </div>
  )
}

export default ProfileCard
