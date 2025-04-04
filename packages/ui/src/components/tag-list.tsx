import { TagList as RACTagList, type TagListProps as RACTagListProps } from 'react-aria-components'
import { tagListClassName } from './tag-list.css'
import { cn } from './utils'

export type TagListProps<T> = RACTagListProps<T>

export function TagList<T extends object>(props: TagListProps<T>) {
  return <RACTagList {...props} className={cn(props.className, tagListClassName)} />
}
