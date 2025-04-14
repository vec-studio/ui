import {
  ToggleButtonGroup as RACToggleButtonGroup,
  type ToggleButtonGroupProps as RACToggleButtonGroupProps
} from 'react-aria-components'
import { toggleButtonGroupClassName } from './toggle-button-group.css'
import { cn } from './utils'

export type ToggleButtonGroupProps = RACToggleButtonGroupProps

export function ToggleButtonGroup(props: ToggleButtonGroupProps) {
  return <RACToggleButtonGroup {...props} className={cn(props.className, toggleButtonGroupClassName)} />
}
