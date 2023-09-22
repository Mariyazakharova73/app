import React, { type FC } from 'react'
import cls from './SidebarItem.module.scss'
import { useTranslation } from 'react-i18next'
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { type SidebarItemType } from './../../model/items'

export interface SidebarItemProps {
  item: SidebarItemType
  collapsed?: boolean
}

const SidebarItem: FC<SidebarItemProps> = ({ item, collapsed }) => {
  const { t } = useTranslation()
  return (
    <AppLink
      className={cls.item}
      theme={AppLinkTheme.SECONDARY}
      to={item.path}
    >
      <item.Icon className={cls.icon} />
      <span className={cls.link}>{t(item.text)}</span>
    </AppLink>
  )
}

export default SidebarItem
