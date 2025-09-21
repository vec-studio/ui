import {
  ColorSwatchPickerItem as RACColorSwatchPickerItem,
  type ColorSwatchPickerItemProps as RACColorSwatchPickerItemProps
} from 'react-aria-components'
import { ColorSwatch } from './color-swatch'
import { colorSwatchPickerItemClassName } from './color-swatch-picker-item.css'
import { cn } from './utils'

export type ColorSwatchPickerItemProps = RACColorSwatchPickerItemProps

export function ColorSwatchPickerItem(props: ColorSwatchPickerItemProps) {
  return (
    <RACColorSwatchPickerItem {...props} className={cn(props.className, colorSwatchPickerItemClassName)}>
      <ColorSwatch />
    </RACColorSwatchPickerItem>
  )
}
