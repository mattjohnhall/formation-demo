import type {
  Meta,
  StoryObj
} from '@storybook/react-vite'

import {
  Popover,
  PopoverTrigger,
  PopoverContent
} from './popover'

import { Button } from './button'

const meta = {
  title: 'England Football/Popover'
} satisfies Meta

export default meta

type Story = StoryObj

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button>
          Open Popover
        </Button>
      </PopoverTrigger>

      <PopoverContent>
        Popover content
      </PopoverContent>
    </Popover>
  )
}