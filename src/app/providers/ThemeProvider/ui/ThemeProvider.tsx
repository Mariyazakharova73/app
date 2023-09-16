import React, { type FC, useMemo, useState } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext'

export interface ThemeProviderProps {
  children: React.ReactNode
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const defauliTheme =
    (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT

  const [theme, setTheme] = useState(defauliTheme)

  const defaultProps = useMemo(() => {
    return { theme, setTheme }
  }, [theme])

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
