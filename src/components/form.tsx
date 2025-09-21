import { FormProps, Form as RACForm } from 'react-aria-components'
import { formClassName } from './form.css'
import { cn } from './utils'

export function Form(props: FormProps) {
  return <RACForm {...props} className={cn(props.className, formClassName)} />
}
