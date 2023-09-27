import { type CSSProperties, useMemo, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Avatar.module.scss'

export interface AvatarProps {
  className?: string
  src?: string
  alt?: string
  size?: number
}

const Avatar: FC<AvatarProps> = ({ className, src, alt, size }) => {
  const styles = useMemo<CSSProperties>(() => {
    return {
      width: size || 100,
      height: size || 100,
    }
  }, [size])
  return (
    <img
      className={classNames(cls.Avatar, {}, [className])}
      src={src}
      alt={alt || ''}
      style={styles}
    />
  )
}

export default Avatar
