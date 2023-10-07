import type { Meta, StoryObj } from '@storybook/react'
import Code from './Code'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
  title: 'shared/Code',
  component: Code,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Code>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    text: `import Code from './Code'
    import { Theme } from 'app/providers/ThemeProvider'
    import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
    import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
    
    const meta = {
      title: 'pages/Code',
      component: Code,
    
      argTypes: {
        backgroundColor: { control: 'color' }
      }
    } as Meta<typeof Code>`,
  },
}

Primary.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({})]

export const PrimaryDark: Story = {
  args: {
    text: `import Code from './Code'
    import { Theme } from 'app/providers/ThemeProvider'
    import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
    import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
    
    const meta = {
      title: 'pages/Code',
      component: Code,
    
      argTypes: {
        backgroundColor: { control: 'color' }
      }
    } as Meta<typeof Code>`,
  },
}

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]

export const PrimaryBlue: Story = {
  args: {
    text: `import Code from './Code'
    import { Theme } from 'app/providers/ThemeProvider'
    import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
    import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
    
    const meta = {
      title: 'pages/Code',
      component: Code,
    
      argTypes: {
        backgroundColor: { control: 'color' }
      }
    } as Meta<typeof Code>`,
  },
}

PrimaryBlue.decorators = [ThemeDecorator(Theme.BLUE), StoreDecorator({})]
