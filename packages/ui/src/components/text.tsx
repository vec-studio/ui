import { Text as RACText, type TextProps as RACTextProps } from 'react-aria-components'
import { textClassName } from './text.css'
import { cn } from './utils'

export function Text(props: RACTextProps) {
  return <RACText {...props} className={cn(props.className, textClassName)} />
}
