import {
  Column as RACColumn,
  Row as RACRow,
  Table as RACTable,
  TableHeader as RACTableHeader,
  type ColumnProps,
  type RowProps,
  type TableHeaderProps,
  type TableProps,
  useTableOptions,
  Collection,
  Cell
} from 'react-aria-components'
import { Checkbox } from './checkbox'
import { checkboxClassName } from './checkbox.css'
import {
  tableCellClassName,
  tableClassName,
  tableColumnClassName,
  tableHeaderClassName,
  tableRowClassName
} from './table.css'
import { cn } from './utils'
import { Button } from './button'

export function Table(props: TableProps) {
  return <RACTable {...props} className={cn(props.className, tableClassName)} />
}

export function Column(props: ColumnProps) {
  return (
    <RACColumn {...props} className={cn(props.className, tableColumnClassName)}>
      {({ allowsSorting, sortDirection }) => (
        <>
          {props.children}
          {allowsSorting && (
            <span aria-hidden="true" className="sort-indicator">
              {sortDirection === 'ascending' ? '▲' : '▼'}
            </span>
          )}
        </>
      )}
    </RACColumn>
  )
}

export function TableHeader<T extends object>(props: TableHeaderProps<T>) {
  const { columns, children, className } = props
  let { selectionBehavior, selectionMode, allowsDragging } = useTableOptions()

  return (
    <RACTableHeader className={cn(className, tableHeaderClassName)}>
      {/* Add extra columns for drag and drop and selection. */}
      {allowsDragging && <RACColumn />}
      {selectionBehavior === 'toggle' && (
        <RACColumn className={tableColumnClassName}>
          {selectionMode === 'multiple' && <Checkbox slot="selection" />}
        </RACColumn>
      )}
      <Collection items={columns}>{children}</Collection>
    </RACTableHeader>
  )
}

export function Row<T extends object>(props: RowProps<T>) {
  const { id, columns, children, ...otherProps } = props
  let { selectionBehavior, allowsDragging } = useTableOptions()

  return (
    <RACRow id={id} {...otherProps} className={cn(props.className, tableRowClassName)}>
      {allowsDragging && (
        <Cell className={tableCellClassName}>
          <Button slot="drag">≡</Button>
        </Cell>
      )}
      {selectionBehavior === 'toggle' && (
        <Cell className={tableCellClassName}>
          <Checkbox className={checkboxClassName} slot="selection" />
        </Cell>
      )}
      <Collection items={columns}>{children}</Collection>
    </RACRow>
  )
}
