import { style } from '@vanilla-extract/css'
import { semanticVars, themeVars } from '../theme.css'
import { sliderClassName } from './slider.css'

export const sliderThumbClassName = style({
  selectors: {
    // slider
    [`${sliderClassName} &`]: {
      width: '1.429rem',
      height: '1.429rem',
      borderRadius: '50%',
      background: semanticVars.color.highlightBackground,
      border: `2px solid ${themeVars.color.backgroundColor}`,
      forcedColorAdjust: 'none'
    },
    [`${sliderClassName} &[data-dragging]`]: {
      background: semanticVars.color.highlightBackgroundPressed
    },
    [`${sliderClassName} &[data-focus-visible]`]: {
      outline: `2px solid ${semanticVars.color.focusRingColor}`
    },
    [`${sliderClassName}[data-orientation=horizontal] &`]: {
      top: '50%'
    },
    [`${sliderClassName}[data-orientation=vertical] &`]: {
      left: '50%'
    },
    [`${sliderClassName}[data-disabled] &`]: {
      background: semanticVars.color.borderColorDisabled
    }
  }
})
