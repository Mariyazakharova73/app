import React, { Suspense, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Loader } from 'shared/ui/Loader'
import { Modal } from 'shared/ui/Modal'
import { LoginFormAsync } from '../LoginForm/LoginForm.async'
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
      <Suspense fallback={<Loader/>}>
        <LoginFormAsync onSuccess={onClose}/>
      </Suspense>
    </Modal>
  )
}

export default LoginModal
