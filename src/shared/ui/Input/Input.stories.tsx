import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'
import { ThemeDecorator } from '../../../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
  title: 'shared/Input',
  component: Input,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    value: '123456',
    placeholder: 'Введите текст',
  },
}

export const PrimaryDarkTheme: Story = {
  args: {
    value: '123456',
    placeholder: 'Введите текст',
  },
}

PrimaryDarkTheme.decorators = [ThemeDecorator(Theme.DARK)]
