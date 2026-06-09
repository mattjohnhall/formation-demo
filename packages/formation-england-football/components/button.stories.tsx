import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from './button'
import * as Icons from '@thefa/formation-icons'

const iconOptions = Object.keys(Icons)

const meta = {
  title: 'England Football/Button',
  component: Button,

  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary']
    },

    size: {
      control: 'select',
      options: ['sm', 'md', 'lg']
    },

    disabled: {
      control: 'boolean'
    },

    leadingIcon: {
      control: 'select',
      options: iconOptions
    },

    trailingIcon: {
      control: 'select',
      options: iconOptions
    }
  }
} satisfies Meta<typeof Button>

export const Playground: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'md',
    disabled: false,
    leadingIcon: 'None',
    trailingIcon: 'None'
  },

  render: ({ leadingIcon, trailingIcon, ...args }) => {
    const Leading =
      leadingIcon !== 'None'
        ? Icons[leadingIcon as keyof typeof Icons]
        : null

    const Trailing =
      trailingIcon !== 'None'
        ? Icons[trailingIcon as keyof typeof Icons]
        : null

    return (
      <Button {...args}>
        {Leading && <Leading />}
        {args.children}
        {Trailing && <Trailing />}
      </Button>
    )
  }
}

export default meta

type Story = StoryObj<typeof meta>