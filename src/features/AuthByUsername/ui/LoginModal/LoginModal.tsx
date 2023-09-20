import React, { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Modal } from 'shared/ui/Modal'
import LoginForm from '../LoginForm/LoginForm'
// import cls from './LoginModal.module.scss'

export interface LoginModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void
}

const LoginModal: FC<LoginModalProps> = ({ className, isOpen, onClose }) => {
  return (
    <Modal
      className={classNames('', {}, [className])}
      isOpen={isOpen}
      onClose={onClose}
      // модальное окно появяется в DOM только в момент открытия
      lazy
    >
      <LoginForm />
    </Modal>
  )
}

export default LoginModal
