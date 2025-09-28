import { style } from '@vanilla-extract/css'
import openProps from 'open-props'
import { themeVars } from '../theme'
import { sliderClassName } from './slider.css'

export const sliderThumbClassName = style({
  selectors: {
    // slider
    [`${sliderClassName} &`]: {
      width: '1.429rem',
      height: '1.429rem',
      borderRadius: '50%',
      background: themeVars.color.highlightBackground,
      border: `2px solid ${openProps.gray1}`,
      forcedColorAdjust: 'none'
    },
    [`${sliderClassName} &[data-dragging]`]: {
      background: themeVars.color.highlightBackgroundPressed
    },
    [`${sliderClassName} &[data-focus-visible]`]: {
      outline: `2px solid ${themeVars.color.focusRingColor}`
    },
    [`${sliderClassName}[data-orientation=horizontal] &`]: {
      top: '50%'
    },
    [`${sliderClassName}[data-orientation=vertical] &`]: {
      left: '50%'
    },
    [`${sliderClassName}[data-disabled] &`]: {
      background: themeVars.color.borderColorDisabled
    }
  }
})
