import { ColorSwatch as RACColorSwatch, type ColorSwatchProps as RACColorSwatchProps } from 'react-aria-components'
import { colorSwatchClassName } from './color-swatch.css'
import { cn } from './utils'

export function ColorSwatch(props: RACColorSwatchProps) {
  return <RACColorSwatch {...props} className={cn(props.className, colorSwatchClassName)} />
}
