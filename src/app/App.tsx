import React, { type FC, Suspense, useEffect } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import AppRouter from 'app/providers/router/ui/AppRouter'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/SideBar'
import { useDispatch } from 'react-redux'
import { initialAuthData } from 'entities/User'

const App: FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initialAuthData())
  }, [dispatch])

  return (
    <div className={classNames('app', {}, [])}>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <div className='content-page'>
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}

export default App
