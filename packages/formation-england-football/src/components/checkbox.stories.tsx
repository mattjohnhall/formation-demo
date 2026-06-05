import type { Meta, StoryObj } from '@storybook/react-vite'
import { Checkbox } from './checkbox'

const meta = {
  title: 'England Football/Checkbox',
  component: Checkbox,

  argTypes: {
    disabled: {
      control: 'boolean'
    },

    label: {
      control: 'text'
    }
  }
} satisfies Meta<typeof Checkbox>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    id: 'terms',
    label: 'Accept terms and conditions',
    disabled: false
  }
}