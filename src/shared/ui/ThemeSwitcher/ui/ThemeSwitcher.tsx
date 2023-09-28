import React, { memo, type FC } from 'react'
import { useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ThemeSwitcher.module.scss'
import ThemeIcon from 'shared/assets/icons/theme-light.svg'
import Button, { ThemeButton } from 'shared/ui/Button/Button'

export interface ThemeSwitcherProps {
  className?: string
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { toggleTheme } = useTheme()
  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames(cls.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      <ThemeIcon/>
    </Button>
  )
}

export default memo(ThemeSwitcher)
