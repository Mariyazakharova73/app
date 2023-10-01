import type { Meta, StoryObj } from '@storybook/react'
import Skeleton from './Skeleton'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
  title: 'shared/Skeleton',
  component: Skeleton,

  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta<typeof Skeleton>

export default meta

type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {
    width: '100%',
    height: 200
  }
}

Normal.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({})]

export const NormalDark: Story = {
  args: {
    width: '100%',
    height: 200
  }
}

NormalDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]

export const NormalBlue: Story = {
  args: {
    width: '100%',
    height: 200
  }
}

NormalBlue.decorators = [ThemeDecorator(Theme.BLUE), StoreDecorator({})]

export const Circle: Story = {
  args: {
    border: '50%',
    width: 100,
    height: 100
  }
}

Circle.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({})]
