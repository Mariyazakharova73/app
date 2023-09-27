import React, { type FC } from 'react'
import { classNames, type Mods } from 'shared/lib/classNames/classNames'
import cls from './ProfileCard.module.scss'
import { useTranslation } from 'react-i18next'
import Text, { TextAlign, TextTheme } from 'shared/ui/Text/Text'
import Input from 'shared/ui/Input/Input'
import { type Profile } from '../../model/types/profile'
import { Loader } from 'shared/ui/Loader'
import Avatar from 'shared/ui/Avatar/Avatar'
import { CurrencySelect, type Currency } from 'entities/Currency'
import { CountrySelect, type Country } from 'entities/Country'

export interface ProfileCardProps {
  className?: string
  data?: Profile
  error?: string
  isLoading?: boolean
  onChange?: (value?: string, name?: string) => void
  readonly?: boolean
  onChangeCurrency?: (value?: Currency) => void
  onChangeCountry?: (value?: Country) => void
}

const ProfileCard: FC<ProfileCardProps> = ({
  className,
  data,
  error,
  isLoading,
  onChange,
  readonly,
  onChangeCurrency,
  onChangeCountry,
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

  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div className={cls.data}>
        {data?.avatar && (
          <div className={cls.avatarWrapper}>
            <Avatar src={data?.avatar} alt={t('avatar')} />
          </div>
        )}
        {['first', 'lastname', 'age', 'city', 'username', 'avatar'].map(
          (item: string) => {
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
          }
        )}
        <CurrencySelect
          className={cls.input}
          value={data?.currency}
          onChange={onChangeCurrency}
          readonly={readonly}
        />
        <CountrySelect
          className={cls.input}
          value={data?.country}
          onChange={onChangeCountry}
          readonly={readonly}
        />
      </div>
    </div>
  )
}

export default ProfileCard
