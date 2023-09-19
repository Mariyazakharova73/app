/* eslint-disable i18next/no-literal-string */
import { t } from 'i18next'
import React, { useState, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'
import Button, { ThemeButton } from 'shared/ui/Button/Button'
import { Modal } from 'shared/ui/Modal'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const [isAuthModal, setIsAuthModal] = useState(false)

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev)
  }, [])

  const { t } = useTranslation()
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button
        theme={ThemeButton.BACKGROUNG_INVERTED}
        className={cls.links}
        onClick={onToggleModal}
      >
        {t('enter')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        dfghjkl; ;lkjhgfdssdfg
      </Modal>
    </div>
  )
}

export default Navbar
