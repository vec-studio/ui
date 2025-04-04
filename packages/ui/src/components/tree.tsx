import { Tree as RACTree, type TreeProps as RACTreeProps } from 'react-aria-components'
import { treeClassName } from './tree.css'
import { cn } from './utils'

export type TreeProps<T> = RACTreeProps<T>

export function Tree<T extends object>(props: TreeProps<T>) {
  return <RACTree {...props} className={cn(props.className, treeClassName)} />
}
