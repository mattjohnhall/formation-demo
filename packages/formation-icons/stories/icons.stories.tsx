import type {
  Meta,
  StoryObj
} from '@storybook/react-vite'

import * as Icons from '../index'

const meta = {
  title: 'Formation Icons/All Icons'
} satisfies Meta

export default meta

type Story = StoryObj

export const Default: Story = {
  render: () => (
    <div className="grid grid-cols-6 gap-6 p-6">
      {Object.entries(Icons).map(
        ([name, Icon]) => (
          <div
            key={name}
            className="flex flex-col items-center gap-3 rounded border border-gray-200 p-4"
          >
            <Icon />

            <span className="text-center text-xs">{name}</span>
          </div>
        )
      )}
    </div>
  )
}