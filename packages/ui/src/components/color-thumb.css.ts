import { style } from '@vanilla-extract/css'
import { colorAreaClassName } from './color-area.css'
import { colorSliderClassName } from './color-slider.css'
import { colorWheelClassName } from './color-wheel.css'

export const colorThumbClassName = style({
  border: '2px solid white',
  boxShadow: '0 0 0 1px black, inset 0 0 0 1px black',
  width: '20px',
  height: '20px',
  borderRadius: '50%',
  boxSizing: 'border-box',
  selectors: {
    '&[data-focus-visible]': {
      width: '24px',
      height: '24px'
    },
    // color area
    [`${colorAreaClassName}[data-disabled] &`]: {
      background: 'gray !important'
    },
    // color slider
    [`${colorSliderClassName}[data-orientation=horizontal] &`]: {
      top: '50%'
    },
    [`${colorSliderClassName} &`]: {
      border: '2px solid white',
      boxShadow: '0 0 0 1px black, inset 0 0 0 1px black',
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      boxSizing: 'border-box'
    },
    [`${colorSliderClassName} &[data-focus-visible]`]: {
      width: '24px',
      height: '24px'
    },
    [`${colorSliderClassName}[data-orientation=vertical] &`]: {
      left: '50%'
    },
    [`${colorSliderClassName}[data-disabled] &`]: {
      background: 'gray !important',
      opacity: '0.5'
    },
    // color wheel
    [`${colorWheelClassName}[data-disabled] &`]: {
      background: 'gray !important',
      opacity: 0.5
    }
  }
})
