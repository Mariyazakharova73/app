import React, {
  type InputHTMLAttributes,
  memo,
  type ChangeEvent,
  useEffect,
  useRef,
} from 'react'
import { classNames, type Mods } from 'shared/lib/classNames/classNames'
import cls from './Input.module.scss'

// исключаем стандартные атрибуты
type HTMLInputProps = Omit<
InputHTMLAttributes<HTMLInputElement>,
'value' | 'onChange' | 'readOnly'
>

export interface InputProps extends HTMLInputProps {
  className?: string
  value?: string | number
  onChange?: (value: string, name?: string) => void
  autofocus?: boolean
  readonly?: boolean
}

const Input = (props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autofocus,
    readonly,
    ...otherProps
  } = props

  const ref = useRef<HTMLInputElement>(null)

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value, e.target.name)
  }

  useEffect(() => {
    if (autofocus) {
      ref.current?.focus()
    }
  }, [autofocus])

  const mods: Mods = {
    [cls.readonly]: readonly,
  }

  return (
    <div className={classNames(cls.InputWrapper, mods, [className])}>
      {placeholder && <div className={cls.placeholder}>{placeholder}</div>}
      <input
        ref={ref}
        className={cls.input}
        type={type}
        value={value || ''}
        readOnly={readonly}
        onChange={onChangeHandler}
        {...otherProps}
      />
    </div>
  )
}

export default memo(Input)
