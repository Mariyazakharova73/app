import React, { type FC, Suspense, useEffect } from 'react'
import './styles/index.scss'
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme'
import { classNames } from 'shared/lib/classNames/classNames'
import AppRouter from 'app/providers/router/ui/AppRouter'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/SideBar'

const App: FC = () => {
  const { theme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
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
