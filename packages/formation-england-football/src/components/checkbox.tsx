import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { CheckIcon } from '@thefa/formation-icons'
import { cn } from '@/lib/cn'

type CheckboxProps =
  React.ComponentProps<typeof CheckboxPrimitive.Root> & {
    label?: string
    id?: string
  }

export function Checkbox({
  className,
  label,
  id,
  ...props
}: CheckboxProps) {
  return (
    <div className="flex items-center gap-2">
      <CheckboxPrimitive.Root
        id={id}
        className={cn(
          'peer h-5 w-5 shrink-0 rounded bg-white border-2 border-gray-600 cursor-pointer',
          'hover:border-ef-navy-400 hover:text-ef-navy-400',
          'data-[state=checked]:border-ef-navy-400 data-[state=checked]:text-ef-navy-400',
          'disabled:border-gray-200 disabled:text-gray-200 disabled:cursor-not-allowed',
          'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-a11y-yellow focus-visible:border-a11y-black focus-visible:ring-offset-a11y-black focus-visible:shadow-none',
          className
        )}
        {...props}
      >
        <CheckboxPrimitive.Indicator className="flex items-center justify-center">
          <CheckIcon fontSize="20" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>

      {label && (
        <label
          htmlFor={id}
          className="cursor-pointer text-sm leading-none peer-is-disabled:cursor-not-allowed peer-is-disabled:text-gray-200"
        >
          {label}
        </label>
      )}
    </div>
  )
}