import type { Meta, StoryObj } from '@storybook/react'
import Button, { ButtonSize } from './Button'
import { ThemeButton } from 'shared/ui/Button/Button'
import { ThemeDecorator } from '../../../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
  title: 'shared/Button',
  component: Button,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Button',
  },
}

export const PrimaryDarkTheme: Story = {
  args: {
    children: 'Button',
  },
}

PrimaryDarkTheme.decorators = [ThemeDecorator(Theme.DARK)]

export const Clear: Story = {
  args: {
    children: 'Button',
    theme: ThemeButton.CLEAR,
  },
}

export const Outlined: Story = {
  args: {
    children: 'Button',
    theme: ThemeButton.OUTLINE,
  },
}

export const OutlinedSizeL: Story = {
  args: {
    children: 'Button',
    theme: ThemeButton.OUTLINE,
    size: ButtonSize.L
  },
}

export const OutlinedSizeXL: Story = {
  args: {
    children: 'Button',
    theme: ThemeButton.OUTLINE,
    size: ButtonSize.XL
  },
}

export const BackgroungTheme: Story = {
  args: {
    children: 'Button',
    theme: ThemeButton.BACKGROUNG,
  },
}

export const BackgroungThemeInverted: Story = {
  args: {
    children: 'Button',
    theme: ThemeButton.BACKGROUNG_INVERTED,
  },
}

export const SquareSizeMDefault: Story = {
  args: {
    children: '>',
    theme: ThemeButton.BACKGROUNG_INVERTED,
    square: true,
  },
}

export const SquareSizeL: Story = {
  args: {
    children: '>',
    theme: ThemeButton.BACKGROUNG_INVERTED,
    square: true,
    size: ButtonSize.L,
  },
}

export const SquareSizeXL: Story = {
  args: {
    children: '>',
    theme: ThemeButton.BACKGROUNG_INVERTED,
    square: true,
    size: ButtonSize.XL,
  },
}
