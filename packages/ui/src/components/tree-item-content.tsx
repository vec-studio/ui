import {
  TreeItemContent as RACTreeItemContent,
  type TreeItemContentProps as RACTreeItemContentProps,
  type TreeItemContentRenderProps
} from 'react-aria-components'
import { Button } from './button'
import { Checkbox } from './checkbox'

export type TreeItemContentProps = RACTreeItemContentProps

export function TreeItemContent(props: TreeItemContentProps) {
  return (
    <RACTreeItemContent>
      {({ hasChildItems, selectionBehavior, selectionMode }: TreeItemContentRenderProps) => (
        <>
          {selectionBehavior === 'toggle' && selectionMode !== 'none' && <Checkbox slot="selection" />}
          <Button slot="chevron">
            <svg viewBox="0 0 24 24">
              <path d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </Button>
          {props.children}
        </>
      )}
    </RACTreeItemContent>
  )
}
