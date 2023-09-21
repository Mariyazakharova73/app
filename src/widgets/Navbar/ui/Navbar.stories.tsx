import type { Meta, StoryObj } from '@storybook/react'
import Navbar from './Navbar'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from '../../../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
  title: 'widget/Navbar',
  component: Navbar,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Navbar>

export default meta

type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {},
}

Light.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({})]

export const Dark: Story = {
  args: {},
}

Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]

export const AuthNavbar: Story = {
  args: {},
}

AuthNavbar.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    user: {
      authData: {},
    },
  }),
]
