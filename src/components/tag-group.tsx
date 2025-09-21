import { TagGroup as RACTagGroup, type TagGroupProps as RACTagGroupProps } from 'react-aria-components'
import { Label } from './label'
import { tagGroupClassName } from './tag-group.css'
import { TagList, type TagListProps } from './tag-list'
import { Text } from './text'
import { cn } from './utils'

export interface TagGroupProps<T>
  extends Omit<RACTagGroupProps, 'children'>,
    Pick<TagListProps<T>, 'items' | 'children' | 'renderEmptyState'> {
  label?: string
  description?: string
  errorMessage?: string
}

export function TagGroup<T extends object>({
  label,
  description,
  errorMessage,
  items,
  children,
  renderEmptyState,
  ...props
}: TagGroupProps<T>) {
  return (
    <RACTagGroup {...props} className={cn(props.className, tagGroupClassName)}>
      <Label>{label}</Label>
      <TagList items={items} renderEmptyState={renderEmptyState}>
        {children}
      </TagList>
      {description && <Text slot="description">{description}</Text>}
      {errorMessage && <Text slot="errorMessage">{errorMessage}</Text>}
    </RACTagGroup>
  )
}
