import type { Meta, StoryObj } from '@storybook/react-vite'
import { RadioGroup, RadioGroupItem } from './radio-group'

const meta = {
  title: 'England Football/Radio Group',
  component: RadioGroup
} satisfies Meta<typeof RadioGroup>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="option-1">
      <div className="flex items-center gap-2">
        <RadioGroupItem
          value="option-1"
          id="option-1"
        />

        <label htmlFor="option-1">
          Option 1
        </label>
      </div>

      <div className="flex items-center gap-2">
        <RadioGroupItem
          value="option-2"
          id="option-2"
        />

        <label htmlFor="option-2">
          Option 2
        </label>
      </div>

      <div className="flex items-center gap-2">
        <RadioGroupItem
          value="option-3"
          id="option-3"
        />

        <label htmlFor="option-3">
          Option 3
        </label>
      </div>
    </RadioGroup>
  )
}