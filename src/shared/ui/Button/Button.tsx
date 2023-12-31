import React, { memo, type ReactNode, type ButtonHTMLAttributes } from 'react'
import { classNames, type Mods } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'

export enum ThemeButton {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  OUTLINE_RED = 'outline_red',
  BACKGROUNG = 'background',
  BACKGROUNG_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
  square?: boolean
  size?: ButtonSize
  disabled?: boolean
  children?: ReactNode
}

const Button = memo(({
  className,
  children,
  theme = ThemeButton.OUTLINE,
  square,
  size = ButtonSize.M,
  disabled,
  ...otherProps
}: ButtonProps) => {
  const mods: Mods = {
    [cls.square]: square,
    [cls.disabled]: disabled
  }
  const additional = [className, cls[theme], cls[size]]

  return (
    <button
      type='button'
      {...otherProps}
      className={classNames(cls.Button, mods, additional)}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
)
export default Button
