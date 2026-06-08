import * as PopoverPrimitive from '@radix-ui/react-popover'
import { cn } from '../lib/cn'

export const Popover = PopoverPrimitive.Root

export const PopoverTrigger =
  PopoverPrimitive.Trigger

export function PopoverContent({
  className,
  align = 'center',
  sideOffset = 8,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Content>) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        align={align}
        sideOffset={sideOffset}
        className={cn(
          'z-50 w-72 rounded-md border border-gray-200 bg-white p-4 shadow-xl outline-none',
          className
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  )
}