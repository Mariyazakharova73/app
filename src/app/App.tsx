import React, { type FC, Suspense, useEffect } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import AppRouter from 'app/providers/router/ui/AppRouter'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/SideBar'
import { useDispatch, useSelector } from 'react-redux'
import { initialAuthData } from 'entities/User'
import { getUserInited } from './../entities/User/model/selectors/getUserInited/getUserInited'

const App: FC = () => {
  const dispatch = useDispatch()
  const userInited = useSelector(getUserInited)

  useEffect(() => {
    dispatch(initialAuthData())
  }, [dispatch])

  return (
    <div className={classNames('app', {}, [])}>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <div className='content-page'>
          <Sidebar />
          {userInited && <AppRouter />}
        </div>
      </Suspense>
    </div>
  )
}

export default App
