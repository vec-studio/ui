import {
  ColorWheelTrack as RACColorWheelTrack,
  type ColorWheelTrackProps as RACColorWheelTrackProps
} from 'react-aria-components'
import { colorWheelTrackClassName } from './color-wheel-track.css'
import { cn } from './utils'

type ColorWheelTrackProps = RACColorWheelTrackProps

export function ColorWheelTrack(props: ColorWheelTrackProps) {
  return <RACColorWheelTrack {...props} className={cn(props.className, colorWheelTrackClassName)} />
}
