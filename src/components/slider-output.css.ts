import { style } from '@vanilla-extract/css'
import { colorSliderClassName } from './color-slider.css'
import { sliderClassName } from './slider.css'

export const sliderOutputClassName = style({
  selectors: {
    // color slider
    [`${colorSliderClassName} &`]: {
      gridArea: 'output'
    },
    [`${colorSliderClassName}[data-orientation=vertical] &`]: {
      display: 'none'
    },
    // slider
    [`${sliderClassName} &`]: {
      gridArea: 'output'
    },
    [`${sliderClassName}[data-orientation=vertical] &`]: {
      display: 'none'
    }
  }
})
