import { SelectValue as RACSelectValue, type SelectValueProps as RACSelectValueProps } from 'react-aria-components'
import { selectValueClassName } from './select-value.css'
import { cn } from './utils'

export type SelectValueProps<T> = RACSelectValueProps<T>

export function SelectValue<T extends object>(props: SelectValueProps<T>) {
  return <RACSelectValue {...props} className={cn(props.className, selectValueClassName)} />
}
