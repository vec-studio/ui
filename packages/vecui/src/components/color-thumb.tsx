import { ColorThumb as RACColorThumb, ColorThumbProps as RACColorThumbProps } from 'react-aria-components'
import { colorThumbClassName } from './color-thumb.css'
import { cn } from './utils'

export type ColorThumbProps = RACColorThumbProps

export function ColorThumb(props: ColorThumbProps) {
  return <RACColorThumb {...props} className={cn(props.className, colorThumbClassName)} />
}
