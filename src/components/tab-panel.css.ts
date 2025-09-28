import { style } from '@vanilla-extract/css'
import { themeVars } from '../theme'

export const tabPanelClassName = style({
  marginTop: '4px',
  padding: '10px',
  borderRadius: '4px',
  outline: 'none',

  selectors: {
    '&[data-focus-visible]': {
      outline: `2px solid ${themeVars.color.focusRingColor}`
    }
  }
})
