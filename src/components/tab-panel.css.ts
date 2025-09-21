import { style } from '@vanilla-extract/css'
import { semanticVars } from '../theme.css'

export const tabPanelClassName = style({
  marginTop: '4px',
  padding: '10px',
  borderRadius: '4px',
  outline: 'none',

  selectors: {
    '&[data-focus-visible]': {
      outline: `2px solid ${semanticVars.color.focusRingColor}`
    }
  }
})
