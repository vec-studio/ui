import { Switch as RACSwitch, SwitchProps as RACSwitchProps } from 'react-aria-components'
import { indicatorClassName, switchClassName } from './switch.css'
import { cn } from './utils'

export interface SwitchProps extends Omit<RACSwitchProps, 'children'> {
  children: React.ReactNode
}

export function Switch({ children, ...props }: SwitchProps) {
  return (
    <RACSwitch {...props} className={cn(props.className, switchClassName)}>
      <div className={indicatorClassName} />
      {children}
    </RACSwitch>
  )
}
