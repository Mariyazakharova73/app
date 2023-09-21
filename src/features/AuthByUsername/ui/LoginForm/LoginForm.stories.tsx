import type { Meta, StoryObj } from '@storybook/react'
import LoginForm from './LoginForm'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

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
  args: {},
}

Primary.decorators = [
  StoreDecorator({
    loginForm: {
      username: '123',
      password: '23',
    },
  }),
]

export const PrimaryWithError: Story = {
  args: {},
}

PrimaryWithError.decorators = [
  StoreDecorator({
    loginForm: {
      username: '123',
      password: '23',
      error: 'Ошибка',
    },
  }),
]

export const Loading: Story = {
  args: {},
}

Loading.decorators = [
  StoreDecorator({
    loginForm: {
      isLoading: true
    },
  }),
]
