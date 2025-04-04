import { SliderOutput as RACSliderOutput, SliderOutputProps as RACSliderOutputProps } from 'react-aria-components'
import { cn } from './utils'
import { sliderOutputClassName } from './slider-output.css'

export type SliderOutputProps = RACSliderOutputProps

export function SliderOutput(props: SliderOutputProps) {
  return <RACSliderOutput {...props} className={cn(props.className, sliderOutputClassName)} />
}
