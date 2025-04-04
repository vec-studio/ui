import { Dialog as RACDialog, DialogProps as RACDialogProps } from 'react-aria-components'
import { dialogClassName } from './dialog.css'
import { cn } from './utils'

export function Dialog(props: RACDialogProps) {
  return <RACDialog {...props} className={cn(props.className, dialogClassName)} />
}
