import React, { useCallback, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ProfilePageHeader.module.scss'
import { useTranslation } from 'react-i18next'
import Button, { ThemeButton } from 'shared/ui/Button/Button'
import Text from 'shared/ui/Text/Text'
import { useSelector } from 'react-redux'
import {
  getProfileReadOnly,
  profileActions,
  updateProfileData,
} from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { getUserAuthData } from 'entities/User'
import { getProfileData } from './../../../../entities/Profile/model/selectors/getProfileData/getProfileData'

export interface ProfilePageHeaderProps {
  className?: string
}

const ProfilePageHeader: FC<ProfilePageHeaderProps> = ({ className }) => {
  const readonly = useSelector(getProfileReadOnly)
  const dispatch = useAppDispatch()
  const { t } = useTranslation('profilePage')
  const authData = useSelector(getUserAuthData)
  const profileData = useSelector(getProfileData)
  const isEditable = authData?.id === profileData?.id

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false))
  }, [dispatch])

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit())
  }, [dispatch])

  const onSave = useCallback(() => {
    void dispatch(updateProfileData())
  }, [dispatch])

  return (
    <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
      <Text title={t('profile')} />
      {isEditable && (
        <div className={cls.btnsWrapper}>
          {readonly
            ? (
              <Button
                className={cls.editBtn}
                theme={ThemeButton.OUTLINE}
                onClick={onEdit}
              >
                {t('edit')}
              </Button>)
            : (
              <>
                <Button
                  className={cls.editBtn}
                  theme={ThemeButton.OUTLINE_RED}
                  onClick={onCancelEdit}
                >
                  {t('cancel')}
                </Button>
                <Button theme={ThemeButton.OUTLINE} onClick={onSave}>
                  {t('save')}
                </Button>
              </>)}
        </div>
      )}
    </div>
  )
}

export default ProfilePageHeader
