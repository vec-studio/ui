import { GridList as RACGridList, type GridListProps as RACGridListProps } from 'react-aria-components'
import { gridListClassName } from './grid-list.css'
import { cn } from './utils'

export type GridListProps<T> = RACGridListProps<T>

export function GridList<T extends object>({ children, ...props }: GridListProps<T>) {
  return (
    <RACGridList {...props} className={cn(props.className, gridListClassName)}>
      {children}
    </RACGridList>
  )
}
