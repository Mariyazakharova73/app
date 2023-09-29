import type { Meta, StoryObj } from '@storybook/react'
import ArticleCodeBlockComponent from './ArticleCodeBlockComponent'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
  title: 'pages/ArticleCodeBlockComponent',
  component: ArticleCodeBlockComponent,

  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta<typeof ArticleCodeBlockComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {}
}

Primary.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({})]
