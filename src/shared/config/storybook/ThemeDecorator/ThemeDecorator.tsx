import { Story } from '@storybook/react'
import { type Theme } from 'app/providers/ThemeProvider'
import 'app/styles/index.scss'

export const ThemeDecorator = (theme: Theme) => (Story: any) =>
  (
    <div className={`app ${theme}`}>
      <Story />
    </div>
  )
