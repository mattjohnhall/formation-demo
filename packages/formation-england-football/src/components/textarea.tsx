import * as React from 'react'
import { cn } from '../lib/cn'

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function Textarea({
  className,
  ...props
}: TextareaProps) {
  return (
    <textarea
      className={cn(
        'flex px-3 py-2 min-h-[120px] w-full border-2 bg-white border-ef-light-blue rounded text-black',
        'focus:bg-gray-100 focus:text-ef-navy-500',
        'hover:bg-gray-100 hover:border-ef-navy-500 hover:text-ef-navy-500',
        'disabled:bg-gray-100 disabled:border-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed',
        'focus-visible:ring-2 focus-visible:ring-a11y-yellow focus-visible:border-a11y-black focus-visible:shadow-none',
        className
      )}
      {...props}
    />
  )
}