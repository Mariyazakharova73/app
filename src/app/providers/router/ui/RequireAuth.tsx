import { type ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { getUserAuthData } from 'entities/User/model/selectors/getUserAuthData/getUserAuthData'
import { useSelector } from 'react-redux'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

export function RequireAuth ({ children }: { children: any }) {
  const auth = useSelector(getUserAuthData)
  const location = useLocation()

  if (!auth) {
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />
  }
  return children
}
