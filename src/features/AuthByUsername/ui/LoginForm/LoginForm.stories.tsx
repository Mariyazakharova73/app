import type { Meta, StoryObj } from '@storybook/react'
import LoginForm from './LoginForm'

const meta = {
  title: 'features/LoginForm',
  component: LoginForm,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof LoginForm>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
  },
}

export const PrimaryDarkTheme: Story = {
  args: {

  },
}
