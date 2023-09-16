import React, { FC, useEffect, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import Button from 'shared/ui/Button/Button'

export interface BugButtonProps {
  className?: string
}

// Компонент для тестирования ErrorBoundary
const BugButton: FC<BugButtonProps> = ({ className }) => {
  const [error, setError] = useState(false)

  const getError = () => {
    setError(true)
  }

  useEffect(() => {
    if (error) {
      throw new Error()
    }
  }, [error])

  return (
    <Button
      onClick={getError}
      className={classNames('', {}, [className])}
      // eslint-disable-next-line i18next/no-literal-string
    >
      throw error
    </Button>
  )
}

export default BugButton
