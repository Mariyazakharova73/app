import type { Meta, StoryObj } from '@storybook/react'
import ArticleDetailsPage from './ArticleDetailsPage'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
  title: 'pages/ArticleDetailsPage',
  component: ArticleDetailsPage,

  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta<typeof ArticleDetailsPage>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {}
}

Primary.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({})]
