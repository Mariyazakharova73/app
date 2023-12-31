import React, { memo, type FC } from 'react'
import cls from './SidebarItem.module.scss'
import { useTranslation } from 'react-i18next'
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { type SidebarItemType } from './../../model/items'
import { classNames } from 'shared/lib/classNames/classNames'
import { useSelector } from 'react-redux'
import { getUserAuthData } from 'entities/User'

export interface SidebarItemProps {
  item: SidebarItemType
  collapsed?: boolean
}

const SidebarItem: FC<SidebarItemProps> = ({ item, collapsed }) => {
  const isAuth = useSelector(getUserAuthData)

  const { t } = useTranslation()

  if (item.authOnly && !isAuth) {
    return null
  }

  return (
    <AppLink
      className={classNames(cls.item, { [cls.collapsed]: collapsed })}
      theme={AppLinkTheme.SECONDARY}
      to={item.path}
    >
      <item.Icon className={cls.icon} />
      <span className={cls.link}>{t(item.text)}</span>
    </AppLink>
  )
}

export default memo(SidebarItem)
