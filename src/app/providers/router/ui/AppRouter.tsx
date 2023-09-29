import React, { memo, Suspense, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'
import {
  type AppRoutesProps,
  routeConfig,
} from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'shared/ui/PageLoader'
import { RequireAuth } from './RequireAuth'

const AppRouter = () => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          <div className='page-wrapper'>
            {route.authOnly
              ? (
                <RequireAuth>{route.element}</RequireAuth>)
              : (route.element)}
          </div>
        }
      />
    )
  }, [])

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
    </Suspense>
  )
}

export default memo(AppRouter)
