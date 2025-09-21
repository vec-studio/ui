import {
  type Key,
  Menu,
  Autocomplete as RACAutocomplete,
  type AutocompleteProps as RACAutocompleteProps,
  useFilter
} from 'react-aria-components'
import { autocompleteClassName } from './autocomplete.css'
import { menuClassName } from './menu.css'
import { SearchField } from './search-field'

export interface AutocompleteProps<T extends object> extends Omit<RACAutocompleteProps, 'children'> {
  label?: string
  placeholder?: string
  items?: Iterable<T>
  children: React.ReactNode | ((item: T) => React.ReactNode)
  onAction?: (id: Key) => void
}

export function Autocomplete<T extends object>({
  label,
  placeholder,
  items,
  children,
  onAction,
  ...props
}: AutocompleteProps<T>) {
  let { contains } = useFilter({ sensitivity: 'base' })
  return (
    <div className={autocompleteClassName}>
      <RACAutocomplete filter={contains} {...props}>
        <SearchField label={label} placeholder={placeholder} />
        <Menu items={items} onAction={onAction} className={menuClassName}>
          {children}
        </Menu>
      </RACAutocomplete>
    </div>
  )
}
