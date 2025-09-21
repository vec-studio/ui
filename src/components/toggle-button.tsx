import { ToggleButton as RACToggleButton, type ToggleButtonProps as RACToggleButtonProps } from 'react-aria-components'
import { toggleButtonClassName } from './toggle-button.css'
import { cn } from './utils'

export type ToggleButtonProps = RACToggleButtonProps

export function ToggleButton(props: ToggleButtonProps) {
  return <RACToggleButton {...props} className={cn(props.className, toggleButtonClassName)} />
}
