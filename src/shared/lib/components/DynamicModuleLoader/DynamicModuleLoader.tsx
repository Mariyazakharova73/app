import { type FC, useEffect, type ReactNode } from 'react'
import { useStore } from 'react-redux'
import { type ReduxStoreWithManager } from 'app/providers/StoreProvider'
import { type StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema'
import { type Reducer } from '@reduxjs/toolkit'

interface DynamicModuleLoaderProps {
  name: StateSchemaKey
  reducers: ReducerList
  children: ReactNode
  removeAfterUnMount?: boolean
}

export type ReducerList = {
  [name in StateSchemaKey]?: Reducer
}

export type ReducerListEntry = [StateSchemaKey, Reducer]

// Для добавления редюсеров асинхронно
const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = ({
  children,
  removeAfterUnMount,
  reducers, // counter, login, user
}) => {
  const store = useStore() as ReduxStoreWithManager

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
      store.reducerManager.add(name, reducer)
    })

    return () => {
      if (removeAfterUnMount) {
        Object.entries(reducers).forEach(
          ([name, reducer]: ReducerListEntry) => {
            store.reducerManager.remove(name)
          }
        )
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <>{children}</>
}

export default DynamicModuleLoader
