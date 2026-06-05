import * as React from 'react'
import { cn } from '@/lib/cn'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input({
  className,
  ...props
}: InputProps) {
  return (
    <input
      className={cn(
        'flex px-3 h-10 w-full border-2 bg-white border-ef-light-blue rounded text-black',
        'focus:bg-gray-100 focus:text-ef-navy-500',
        'hover:bg-gray-100 hover:border-ef-navy-500 hover:text-ef-navy-500',
        'aria-invalid:border-error-900 aria-invalid:bg-error-100',
        'disabled:bg-gray-100 disabled:border-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed',
        'focus-visible:ring-2 focus-visible:ring-a11y-yellow focus-visible:border-a11y-black focus-visible:shadow-none',
        className
      )}
      {...props}
    />
  )
}