import { ThemeProvider, type Theme } from 'app/providers/ThemeProvider'
import 'app/styles/index.scss'

export const ThemeDecorator = (theme: Theme) => (Story: any) => {
  document.body.className = theme
  return (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        <Story />
      </div>
    </ThemeProvider>
  )
}
