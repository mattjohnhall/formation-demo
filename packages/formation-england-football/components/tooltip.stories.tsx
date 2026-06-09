import type {
  Meta,
  StoryObj
} from '@storybook/react-vite'

import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent
} from './tooltip'

import { Button } from './button'

const meta = {
  title: 'England Football/Tooltip'
} satisfies Meta

export default meta

type Story = StoryObj

export const Default: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button>
            Hover me
          </Button>
        </TooltipTrigger>

        <TooltipContent>
          Tooltip content
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}