import {
  Menu as RACMenu,
  MenuProps as RACMenuProps,
  MenuTrigger as RACMenuTrigger,
  MenuTriggerProps as RACMenuTriggerProps,
  Popover as RACPopover
} from 'react-aria-components'
import { Button } from './button'
import { menuClassName } from './menu.css'
import { cn } from './utils'
import { popoverClassName } from './popover.css'

export interface MenuProps<T> extends RACMenuProps<T>, Omit<RACMenuTriggerProps, 'children'> {
  label?: string
}

export function Menu<T extends object>({ label, children, ...props }: MenuProps<T>) {
  return (
    <RACMenuTrigger {...props}>
      <Button>{label}</Button>
      <RACPopover className={popoverClassName}>
        <RACMenu {...props} className={cn(props.className, menuClassName)}>
          {children}
        </RACMenu>
      </RACPopover>
    </RACMenuTrigger>
  )
}
