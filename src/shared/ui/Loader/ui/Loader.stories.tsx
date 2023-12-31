import type { Meta, StoryObj } from '@storybook/react'
import Loader from './Loader'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from '../../../config/storybook/ThemeDecorator/ThemeDecorator'

const meta = {
  title: 'shared/Loader',
  component: Loader,

  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta<typeof Loader>

export default meta

type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {}
}

Light.decorators = [ThemeDecorator(Theme.LIGHT)]

export const Dark: Story = {
  args: {}
}

Light.decorators = [ThemeDecorator(Theme.DARK)]
