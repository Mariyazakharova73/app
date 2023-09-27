import type { Meta, StoryObj } from '@storybook/react'
import { Country } from 'entities/Country'
import ProfileCard from './ProfileCard'
import { Currency } from 'entities/Currency/model/types/currency'
import AvatarImg from '../../../../shared/assets/icons/avatar.jpg'

const meta = {
  title: 'entities/ProfileCard',
  component: ProfileCard,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ProfileCard>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    data: {
      username: 'admin',
      age: 22,
      country: Country.Armenia,
      lastname: 'react',
      first: 'name',
      city: 'Moscow',
      currency: Currency.EUR,
      avatar: AvatarImg
    }
  },
}

export const IsLoading: Story = {
  args: {
    isLoading: true
  },
}

export const WithError: Story = {
  args: {
    error: 'true'
  },
}
