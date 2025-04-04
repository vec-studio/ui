import { GridListItem as RACGridListItem, type GridListItemProps as RACGridListItemProps } from 'react-aria-components'
import { Button } from './button'
import { Checkbox } from './checkbox'
import { gridListItemClassName } from './grid-list-item.css'
import { cn } from './utils'

export type GridListItemProps = RACGridListItemProps

export function GridListItem({ children, ...props }: GridListItemProps) {
  let textValue = typeof children === 'string' ? children : undefined
  return (
    <RACGridListItem textValue={textValue} {...props} className={cn(props.className, gridListItemClassName)}>
      {({ selectionMode, selectionBehavior, allowsDragging }) => (
        <>
          {/* Add elements for drag and drop and selection. */}
          {allowsDragging && <Button slot="drag">≡</Button>}
          {selectionMode === 'multiple' && selectionBehavior === 'toggle' && <Checkbox slot="selection" />}
          {children}
        </>
      )}
    </RACGridListItem>
  )
}
