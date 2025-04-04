import { style } from '@vanilla-extract/css'
import { autocompleteClassName } from './autocomplete.css'
import { colorSliderClassName } from './color-slider.css'
import { sliderClassName } from './slider.css'

export const labelClassName = style({
  selectors: {
    // autocomplete
    [`${autocompleteClassName} &`]: {
      marginBottom: '.5em'
    },
    // color slider
    [`${colorSliderClassName} &`]: {
      gridArea: 'label'
    },
    [`${colorSliderClassName}[data-orientation=vertical] &`]: {
      display: 'none'
    },
    // slider
    [`${sliderClassName} &`]: {
      gridArea: 'label'
    },
    [`${sliderClassName}[data-orientation=vertical] &`]: {
      display: 'none'
    }
  }
})
