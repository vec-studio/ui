import { ColorWheel as RACColorWheel, type ColorWheelProps as RACColorWheelProps } from 'react-aria-components'
import { ColorThumb } from './color-thumb'
import { ColorWheelTrack } from './color-wheel-track'
import { colorWheelClassName } from './color-wheel.css'
import { cn } from './utils'

export interface ColorWheelProps extends Omit<RACColorWheelProps, 'outerRadius' | 'innerRadius'> {}

export function ColorWheel(props: ColorWheelProps) {
  return (
    <RACColorWheel {...props} className={cn(props.className, colorWheelClassName)} outerRadius={100} innerRadius={74}>
      <ColorWheelTrack />
      <ColorThumb />
    </RACColorWheel>
  )
}
