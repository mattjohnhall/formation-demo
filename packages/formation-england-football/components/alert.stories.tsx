import type {
  Meta,
  StoryObj
} from '@storybook/react-vite'

import { Alert } from './alert'

const meta = {
  title: 'England Football/Alert',
  component: Alert,

  argTypes: {
    variant: {
      control: 'select',
      options: [
        'info',
        'success',
        'warning',
        'error'
      ]
    },

    title: {
      control: 'text'
    }
  }
} satisfies Meta<typeof Alert>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    variant: 'info',
    title: 'Information',
    children:
      'This is an alert message.'
  }
}