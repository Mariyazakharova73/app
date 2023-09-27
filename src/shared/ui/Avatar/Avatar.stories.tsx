import type { Meta, StoryObj } from '@storybook/react'
import Avatar from './Avatar'
import AvatarImg from './avatar.jpg'

const meta = {
  title: 'shared/Avatar',
  component: Avatar,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {},
} as Meta<typeof Avatar>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    size: 150,
    src: AvatarImg
  },
}

export const Small: Story = {
  args: {
    size: 50,
    src: AvatarImg
  },
}
