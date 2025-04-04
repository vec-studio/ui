import { ButtonProps, Button as RACButton } from 'react-aria-components'
import { buttonClassName } from './button.css'
import { cn } from './utils'

export function Button(props: ButtonProps) {
  return <RACButton {...props} className={cn(props.className, buttonClassName)} />
}
