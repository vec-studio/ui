import { SliderThumb as RACSliderThumb, type SliderThumbProps as RACSliderThumbProps } from 'react-aria-components'
import { sliderThumbClassName } from './slider-thumb.css'
import { cn } from './utils'

export type SliderThumbProps = RACSliderThumbProps

export function SliderThumb(props: SliderThumbProps) {
  return <RACSliderThumb {...props} className={cn(props.className, sliderThumbClassName)} />
}
