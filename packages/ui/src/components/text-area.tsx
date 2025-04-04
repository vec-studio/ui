import { TextArea as RACTextArea, type TextAreaProps as RACTextAreaProps } from 'react-aria-components'
import { textAreaClassName } from './text-area.css'
import { cn } from './utils'

export function TextArea(props: RACTextAreaProps) {
  return <RACTextArea {...props} className={cn(props.className, textAreaClassName)} />
}
