import { MenuItem as RACMenuItem, type MenuItemProps as RACMenuItemProps } from 'react-aria-components'
import { menuItemClassName } from './menu-item.css'
import { cn } from './utils'

export type MenuItemProps = RACMenuItemProps

export function MenuItem(props: RACMenuItemProps) {
  let textValue = props.textValue || (typeof props.children === 'string' ? props.children : undefined)
  return (
    <RACMenuItem {...props} textValue={textValue} className={cn(props.className, menuItemClassName)}>
      {({ hasSubmenu }) => (
        <>
          {props.children}
          {hasSubmenu && (
            <svg className="chevron" viewBox="0 0 24 24">
              <path d="m9 18 6-6-6-6" />
            </svg>
          )}
        </>
      )}
    </RACMenuItem>
  )
}
