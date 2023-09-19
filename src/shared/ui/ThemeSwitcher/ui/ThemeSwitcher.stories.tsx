import type { Meta, StoryObj } from '@storybook/react'
import ThemeSwitcher from './ThemeSwitcher'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from '../../../config/storybook/ThemeDecorator/ThemeDecorator'

const meta = {
  title: 'shared/ThemeSwitcher',
  component: ThemeSwitcher,

  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta<typeof ThemeSwitcher>

export default meta

type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {}
}

Light.decorators = [ThemeDecorator(Theme.LIGHT)]

export const Dark: Story = {
  args: {}
}

Dark.decorators = [ThemeDecorator(Theme.DARK)]
