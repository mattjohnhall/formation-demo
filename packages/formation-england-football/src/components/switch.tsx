import * as SwitchPrimitive from '@radix-ui/react-switch'
import { cn } from '@/lib/cn'

export function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      className={cn(
        'peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors',
        'bg-ef-light-blue hover:bg-ef-navy-400 data-[state=checked]:bg-progress-900',
        'disabled:cursor-not-allowed disabled:bg-gray-200',
        'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-a11y-yellow focus-visible:border-a11y-black focus-visible:ring-offset-a11y-black focus-visible:shadow-none',
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        className={cn(
          'pointer-events-none block h-4 w-4 rounded-full bg-white shadow transition-transform',
          'translate-x-0 data-[state=checked]:translate-x-4'
        )}
      />
    </SwitchPrimitive.Root>
  )
}