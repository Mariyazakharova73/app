import type { Meta, StoryObj } from '@storybook/react'
import ArticleTextBlockComponent from './ArticleTextBlockComponent'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
  title: 'pages/ArticleTextBlockComponent',
  component: ArticleTextBlockComponent,

  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta<typeof ArticleTextBlockComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {}
}

Primary.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({})]
