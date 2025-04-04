import { SliderTrack as RACSliderTrack, SliderTrackProps as RACSliderTrackProps } from 'react-aria-components'
import { cn } from './utils'
import { sliderTrackClassName } from './slider-track.css'

export type SliderTrackProps = RACSliderTrackProps

export function SliderTrack(props: SliderTrackProps) {
  return <RACSliderTrack {...props} className={cn(props.className, sliderTrackClassName)} />
}
