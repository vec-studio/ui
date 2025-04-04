import { Checkbox as AriaCheckbox, CheckboxProps } from 'react-aria-components'
import { checkboxCheckboxClassName, checkboxClassName } from './checkbox.css'
import { cn } from './utils'

export function Checkbox({ children, ...props }: CheckboxProps) {
  return (
    <AriaCheckbox {...props} className={cn(props.className, checkboxClassName)}>
      {({ isIndeterminate }) => (
        <>
          <div className={checkboxCheckboxClassName}>
            <svg viewBox="0 0 18 18" aria-hidden="true">
              {isIndeterminate ? <rect x={1} y={7.5} width={15} height={3} /> : <polyline points="1 9 7 14 15 4" />}
            </svg>
          </div>
          {children}
        </>
      )}
    </AriaCheckbox>
  )
}
