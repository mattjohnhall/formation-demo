import { Label } from './label'
import { InfoIcon } from '@thefa/formation-icons'
import { cn } from '@/lib/cn'

type FormFieldProps = {
  label?: string
  hint?: string
  error?: string
  required?: boolean
  htmlFor?: string
  children: React.ReactNode
  className?: string
}

export function FormField({
  label,
  hint,
  error,
  required,
  htmlFor,
  children,
  className
}: FormFieldProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-2',
        className
      )}
    >
      {label && (
        <Label
          htmlFor={htmlFor}
          className="text-sm font-medium"
        >
          {label}

          {required && (
            <span className="ml-1 text-ef-red-500">
              *
            </span>
          )}
        </Label>
      )}

      {children}

      {hint && !error && (
        <p className="text-sm text-gray-700">
          {hint}
        </p>
      )}

      {error && (
        <p className="relative -z-10 flex items-center -mt-3 text-sm bg-error-900 text-white p-2 pt-3 rounded-b gap-1">
          <InfoIcon className="size-4" />
          <span>{error}</span>
        </p>
      )}
    </div>
  )
}