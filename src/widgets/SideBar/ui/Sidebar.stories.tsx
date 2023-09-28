import type { Meta, StoryObj } from '@storybook/react'
import Sidebar from './Sidebar'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from '../../../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
  title: 'widget/Sidebar',
  component: Sidebar,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Sidebar>

export default meta

type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {},
}

Light.decorators = [
  ThemeDecorator(Theme.LIGHT),
  StoreDecorator({ user: { authData: {} } }),
]

export const Dark: Story = {
  args: {},
}

Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({ user: { authData: {} } }),
]

export const NoAuth: Story = {
  args: {},
}

NoAuth.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({ user: {} }),
]
