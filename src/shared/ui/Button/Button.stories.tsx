import type { Meta, StoryObj } from '@storybook/react'
import Button from './Button'
import { ThemeButton } from 'shared/ui/Button/Button'
import { ThemeDecorator } from '../../../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
  title: 'shared/Button',
  component: Button,

  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Button'
  }
}

export const PrimaryDark: Story = {
  args: {
    children: 'Button'
  }
}

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Clear: Story = {
  args: {
    children: 'Button',
    theme: ThemeButton.CLEAR
  }
}

export const Outlined: Story = {
  args: {
    children: 'Button',
    theme: ThemeButton.OUTLINE
  }
}
