import type {
  Meta,
  StoryObj
} from '@storybook/react-vite'

import * as Icons from './index'

const iconNames = Object.keys(Icons)

const meta = {
  title: 'Formation Icons/Playground',

  argTypes: {
    name: {
      control: 'select',
      options: iconNames
    },

    fontSize: {
      control: 'select',
      options: [
        'inherit',
        'small',
        'medium',
        'large'
      ]
    }
  }
} satisfies Meta

export default meta

type Story = StoryObj

export const Default: Story = {
  args: {
    name: iconNames[0],
    fontSize: 'medium'
  },

  render: ({
    name,
    fontSize
  }) => {
    const Icon =
      Icons[name as keyof typeof Icons]

    return (
      <div className="flex items-center justify-center p-10">
        <Icon fontSize={fontSize} />
      </div>
    )
  }
}