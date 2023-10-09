import type { Meta, StoryObj } from '@storybook/react'
import AddCommentForm from './AddCommentForm'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
  title: 'pages/AddCommentsForm',
  component: AddCommentForm,

  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta<typeof AddCommentForm>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {}
}

Primary.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({})]
