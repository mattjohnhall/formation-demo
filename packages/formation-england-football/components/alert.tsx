import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { NotificationsNoneIcon, CheckCircleIcon, WarningIcon, ErrorIcon } from '@thefa/formation-icons'

import { cn } from '../lib/cn'

const alertVariants = cva(
  'flex flex-row items-center p-4 gap-3 border-2 shadow-lg rounded ',
  {
    variants: {
      variant: {
        info: [
          'border-ef-light-blue',
          'bg-white',
          'text-blue-900'
        ].join(' '),

        success: [
          'border-ef-light-blue',
          'bg-white',
          'text-green-900'
        ].join(' '),

        warning: [
          'border-ef-light-blue',
          'bg-white',
          'text-amber-900'
        ].join(' '),

        error: [
          'border-ef-light-blue',
          'bg-white',
          'text-red-900'
        ].join(' ')
      }
    },

    defaultVariants: {
      variant: 'info'
    }
  }
)

const icons = {
  info: NotificationsNoneIcon,
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon
}

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  title?: string
}

export function Alert({
  className,
  variant = 'info',
  title,
  children,
  ...props
}: AlertProps) {
  const Icon = icons[variant ?? 'info']

  return (
    <div
      role="alert"
      className={cn(
        alertVariants({ variant }),
        className
      )}
      {...props}
    >
      <Icon className="mt-0.5 size-10 shrink-0" fontSize="large" />

      <div className="flex flex-col w-px h-full min-h-10 bg-gray-300" />

      <div className="space-y-0.5 pl-2">
        {title && (
          <div className="font-bold text-ef-navy-500">
            {title}
          </div>
        )}

        <div className="text-gray-800">
          {children}
        </div>
      </div>
    </div>
  )
}