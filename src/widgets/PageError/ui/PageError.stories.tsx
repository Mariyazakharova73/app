import type { Meta, StoryObj } from '@storybook/react'
import PageError from './PageError'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from '../../../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator'

const meta = {
  title: 'pages/PageError',
  component: PageError,

  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta<typeof PageError>

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
