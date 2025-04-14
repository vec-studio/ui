import { style } from '@vanilla-extract/css'
import { semanticVars } from '../theme.css'
import { colorSliderClassName } from './color-slider.css'
import { sliderClassName } from './slider.css'

export const sliderTrackClassName = style({
  selectors: {
    // color slider
    [`${colorSliderClassName} &`]: {
      gridArea: 'track',
      borderRadius: '4px'
    },
    [`${colorSliderClassName}[data-orientation=horizontal] &`]: {
      height: '28px'
    },
    [`${colorSliderClassName}[data-orientation=vertical] &`]: {
      width: '28px',
      height: '100%'
    },
    [`${colorSliderClassName}[data-disabled] &`]: {
      background: 'gray !important'
    },
    // slider
    [`${sliderClassName} &`]: {
      gridArea: 'track',
      position: 'relative'
    },
    [`${sliderClassName} &::before`]: {
      content: '',
      display: 'block',
      position: 'absolute',
      background: semanticVars.color.borderColor
    },
    [`${sliderClassName}[data-orientation=horizontal] &`]: {
      height: '30px',
      width: '100%'
    },
    [`${sliderClassName}[data-orientation=horizontal] &::before`]: {
      height: '3px',
      width: '100%',
      top: '50%',
      transform: 'translateY(-50%)'
    },
    [`${sliderClassName}[data-orientation=vertical] &`]: {
      width: '30px',
      height: '100%'
    },
    [`${sliderClassName}[data-orientation=vertical] &::before`]: {
      width: '3px',
      height: '100%',
      left: '50%',
      transform: 'translateX(-50%)'
    },
    [`${sliderClassName}[data-disabled] &::before`]: {
      background: semanticVars.color.borderColorDisabled
    }
  }
})
