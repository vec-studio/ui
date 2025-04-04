import { style } from '@vanilla-extract/css'
import { colorWheelClassName } from './color-wheel.css'

export const colorWheelTrackClassName = style({
  [`${colorWheelClassName}[data-disabled] &`]: {
    background: 'gray !important'
  }
})
