import { memo, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Text.module.scss'

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

export enum TextAlign {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center',
}

export enum TextSize {
  M = 'size_m',
  L = 'size_l',
}

export interface TextProps {
  className?: string
  title?: string
  text?: string
  theme?: TextTheme
  align?: TextAlign
  size?: TextSize
}

const Text: FC<TextProps> = ({
  className,
  title,
  text,
  theme = TextTheme.PRIMARY,
  align = TextAlign.LEFT,
  size = TextSize.M,
}) => {
  return (
    <div
      className={classNames(cls.Text, {}, [className, cls[theme], cls[align], cls[size]])}
    >
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  )
}

export default memo(Text)
