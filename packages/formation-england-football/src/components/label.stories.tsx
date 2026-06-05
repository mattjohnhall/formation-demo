import type {
  Meta,
  StoryObj
} from '@storybook/react-vite'

import { Label } from './label'
import { Input } from './input'

const meta = {
  title: 'England Football/Label',
  component: Label
} satisfies Meta<typeof Label>

export default meta

type Story = StoryObj<typeof Label>

export const Default: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Label htmlFor="email">
        Email address
      </Label>
    </div>
  )
}