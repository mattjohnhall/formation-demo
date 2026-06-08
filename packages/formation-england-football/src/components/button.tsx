import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/cn'

const buttonBase =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap border-2 rounded text-md font-bold transition-all cursor-pointer '+
  'disabled:bg-gray-100 disabled:border-gray-100 disabled:text-gray-700 disabled:cursor-not-allowed '+
  'focus-visible:bg-a11y-yellow focus-visible:border-a11y-black focus-visible:text-a11y-black focus-visible:underline focus-visible:shadow-none focus-visible:outline-none'

const buttonVariants = cva(buttonBase, {
  variants: {
    variant: {
      primary: 'bg-ef-red-500 border-ef-red-500 text-white hover:bg-ef-navy-400 hover:border-ef-navy-400 active:bg-ef-navy-500 active:border-ef-navy-500 active:text-white',
      secondary: 'bg-white border-ef-light-blue text-black hover:bg-gray-100 hover:border-ef-navy-500 hover:text-ef-navy-500 active:bg-ef-navy-500 active:border-ef-navy-500 active:text-white',
      tertiary: 'bg-transparent border-transparent underline text-ef-navy-400 hover:text-ef-navy-500 hover:no-underline active:text-ef-navy-500 disabled:bg-transparent disabled:border-transparent disabled:text-gray-500'
    },
    size: {
      sm: 'h-8 px-4 text-sm',
      md: 'h-10 px-5',
      lg: 'h-12 px-6 text-lg',
    }
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md'
  }
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

export const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button'

    return (
      <Comp
        ref={ref}
        className={cn(
          buttonVariants({
            variant,
            size,
            className
          })
        )}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'