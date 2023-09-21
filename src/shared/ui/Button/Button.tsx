import React, { type ButtonHTMLAttributes, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'

export enum ThemeButton {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
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
}

const Button: FC<ButtonProps> = ({
  className,
  children,
  theme,
  square,
  size,
  disabled,
  ...otherProps
}) => {
  const mods: Record<string, boolean> = {
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

export default Button
