import React, { type ChangeEvent, memo, useMemo, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Select.module.scss'

interface SelectOption {
  value: string
  content: string
}

export interface SelectProps {
  className?: string
  label?: string
  options?: SelectOption[]
  value?: string
  onChange?: (value: string) => void
  readonly?: boolean
}

const Select: FC<SelectProps> = ({
  className,
  label,
  options,
  onChange,
  value,
  readonly
}) => {
  const optionList = useMemo(() => {
    return options?.map((item) => (
      <option className={cls.option} value={item.value} key={item.value}>
        {item.content}
      </option>
    ))
  }, [options])

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value)
    }
  }

  return (
    <div className={classNames(cls.Wrapper, {}, [className])}>
      {label && <span className={cls.label}>{label}</span>}
      <select
        disabled={readonly}
        className={cls.select}
        value={value}
        onChange={onChangeHandler}
      >
        {optionList}
      </select>
    </div>
  )
}

export default memo(Select)
