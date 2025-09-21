import { Input as RACInput, type InputProps as RACInputProps } from 'react-aria-components'
import { inputClassName } from './input.css'
import { cn } from './utils'

export function Input(props: RACInputProps) {
  return <RACInput {...props} className={cn(props.className, inputClassName)} />
}
