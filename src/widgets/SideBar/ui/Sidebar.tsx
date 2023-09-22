import React, { type FC, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { LanguageSwitcher } from 'shared/ui/LanguageSwitcher'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import cls from './Sidebar.module.scss'
import Button, { ButtonSize, ThemeButton } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { SidebarItemList } from '../model/items'
import SidebarItem from './SidebarItem/SidebarItem'
export interface SidebarProps {
  className?: string
}

const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false)
  const { t } = useTranslation('')
  const onToggle = () => {
    setCollapsed((prev) => !prev)
  }

  return (
    <div
      data-testid='sidebar'
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button
        data-testid='sidebar-toggle'
        onClick={onToggle}
        className={cls.collapsedBtn}
        theme={ThemeButton.BACKGROUNG_INVERTED}
        square
        size={ButtonSize.XL}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cls.items}>
        {SidebarItemList.map((item) => {
          return <SidebarItem key={item.text} item={item} collapsed={collapsed} />
        })}
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher className={cls.lang} short={collapsed} />
      </div>
    </div>
  )
}

export default Sidebar
