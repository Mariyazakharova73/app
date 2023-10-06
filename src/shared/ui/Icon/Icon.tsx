import React, { memo, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Icon.module.scss'

export interface IconProps {
  className?: string
  Svg: React.FC<React.SVGProps<SVGSVGElement>>
}

const Icon: FC<IconProps> = ({ className, Svg }) => {
  return <Svg className={classNames(cls.Icon, {}, [className])} />
}

export default memo(Icon)
