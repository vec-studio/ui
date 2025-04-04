import { Radio as RACRadio, type RadioProps as RACRadioProps } from 'react-aria-components'
import { radioClassName } from './radio.css'
import { cn } from './utils'

export type RadioProps = RACRadioProps

export function Radio(props: RadioProps) {
  return <RACRadio {...props} className={cn(props.className, radioClassName)} />
}
