import { TreeItem as RACTreeItem, type TreeItemProps as RACTreeItemProps } from 'react-aria-components'
import { TreeItemContent } from './tree-item-content'
import { treeItemClassName } from './tree-item.css'
import { cn } from './utils'

export interface TreeItemProps extends Partial<RACTreeItemProps> {
  title: string
}

export function TreeItem(props: TreeItemProps) {
  return (
    <RACTreeItem textValue={props.title} {...props} className={cn(props.className, treeItemClassName)}>
      <TreeItemContent>{props.title}</TreeItemContent>
      {props.children}
    </RACTreeItem>
  )
}
