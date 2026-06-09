import * as React from 'react'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import CheckIcon from '@mui/icons-material/Check'
import { cn } from '../lib/cn'

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      className={cn('grid gap-3', className)}
      {...props}
    />
  )
}

function RadioGroupItem({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return (
    <RadioGroupPrimitive.Item
      className={cn(
        'aspect-square h-6 w-6 shrink-0 rounded-full bg-white border-2 border-gray-600 cursor-pointer',
        'hover:border-ef-navy-400 hover:text-ef-navy-400',
        'data-[state=checked]:border-ef-navy-400 data-[state=checked]:text-ef-navy-400',
        'disabled:border-gray-200 disabled:text-gray-200 disabled:cursor-not-allowed',
        'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-a11y-yellow focus-visible:border-a11y-black focus-visible:ring-offset-a11y-black focus-visible:shadow-none',
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <RadioGroupPrimitive.Indicator className="relative flex size-full items-center justify-center after:block after:size-2.5 after:rounded-full after:bg-ef-navy-400" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
}

export {
  RadioGroup,
  RadioGroupItem
}