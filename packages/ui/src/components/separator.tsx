import { Separator as RACSeparator, type SeparatorProps as RACSeparatorProps } from 'react-aria-components'
import { separatorClassName } from './separator.css'
import { cn } from './utils'

export function Separator(props: RACSeparatorProps) {
  return <RACSeparator {...props} className={cn(props.className, separatorClassName)} />
}
