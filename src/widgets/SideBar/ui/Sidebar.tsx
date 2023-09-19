/* eslint-disable i18next/no-literal-string */
import React, { type FC, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { LanguageSwitcher } from 'shared/ui/LanguageSwitcher'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import cls from './Sidebar.module.scss'
import Button from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'

export interface SidebarProps {
  className?: string
}

const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false)
  const { t } = useTranslation()

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
      <Button data-testid='sidebar-toggle' onClick={onToggle}>
        {t('toggle')}
      </Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher className={cls.lang} />
      </div>
    </div>
  )
}

export default Sidebar
