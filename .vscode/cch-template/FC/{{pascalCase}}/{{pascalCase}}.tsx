import React, { memo, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './{{pascalCase}}.module.scss'
import { useTranslation } from 'react-i18next'

export interface {{pascalCase}}Props {
  className?: string
}

const {{pascalCase}}: FC<{{pascalCase}}Props> = ({ className }) => {
  const { t } = useTranslation()
  return (
    <div className={classNames(cls.{{pascalCase}}, {}, [className])}>
      
    </div>
  )
}

export default memo({{pascalCase}})

