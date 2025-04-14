import {
  ColorSwatchPicker as RACColorSwatchPicker,
  type ColorSwatchPickerProps as RACColorSwatchPickerProps
} from 'react-aria-components'
import { colorSwatchPickerClassName } from './color-swatch-picker.css'
import { cn } from './utils'

export type ColorSwatchPickerProps = RACColorSwatchPickerProps

export function ColorSwatchPicker({ children, ...props }: ColorSwatchPickerProps) {
  return (
    <RACColorSwatchPicker {...props} className={cn(props.className, colorSwatchPickerClassName)}>
      {children}
    </RACColorSwatchPicker>
  )
}
