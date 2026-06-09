import type {
  Meta,
  StoryObj
} from '@storybook/react-vite'

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from './select'

const meta = {
  title: 'England Football/Select'
} satisfies Meta

export default meta

type Story = StoryObj

export const Default: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[240px]">
        <SelectValue placeholder="Select option" />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="one">
          Option One
        </SelectItem>

        <SelectItem value="two">
          Option Two
        </SelectItem>

        <SelectItem value="three">
          Option Three
        </SelectItem>
      </SelectContent>
    </Select>
  )
}