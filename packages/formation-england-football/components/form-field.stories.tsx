import type {
  Meta,
  StoryObj
} from '@storybook/react-vite'

import { FormField } from './form-field'
import { Input } from './input'

const meta = {
  title: 'England Football/Form Field',
  component: FormField
} satisfies Meta<typeof FormField>

export default meta

type Story = StoryObj<typeof FormField>

export const Default: Story = {
  render: () => (
    <div className="w-[320px]">
      <FormField
        label="Email address"
        hint="We'll never share your email."
        htmlFor="email"
      >
        <Input
          id="email"
          placeholder="name@example.com"
        />
      </FormField>
    </div>
  )
}

export const Error: Story = {
  render: () => (
    <div className="w-[320px]">
      <FormField
        label="Email address"
        error="Please enter a valid email."
        htmlFor="email-error"
      >
        <Input
          id="email-error"
          aria-invalid
          placeholder="name@example.com"
          value="emmaexample.com"
        />
      </FormField>
    </div>
  )
}

export const Required: Story = {
  render: () => (
    <div className="w-[320px]">
      <FormField
        label="Favourite team"
        required
        htmlFor="favourite-team"
      >
        <Input
          id="favourite-team"
          placeholder="e.g. Liverpool"
        />
      </FormField>
    </div>
  )
}