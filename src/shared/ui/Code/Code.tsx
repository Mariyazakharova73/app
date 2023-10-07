import React, { memo, useCallback, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import Button from '../Button/Button'
import Icon from '../Icon/Icon'
import cls from './Code.module.scss'
import CopyIcon from 'shared/assets/icons/copy.svg'
import { ThemeButton } from 'shared/ui/Button/Button'

export interface CodeProps {
  className?: string
  text: string
}

const Code: FC<CodeProps> = ({ className, text }) => {
  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text)
  }, [text])

  return (
    <pre className={classNames(cls.Code, {}, [className])}>
      <Button className={cls.copyBtn} onClick={onCopy} theme={ThemeButton.CLEAR}>
        <Icon Svg={CopyIcon} />
      </Button>
      <code>{text}</code>
    </pre>
  )
}

export default memo(Code)
