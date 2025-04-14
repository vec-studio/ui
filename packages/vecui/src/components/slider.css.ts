import { style } from '@vanilla-extract/css'
import { semanticVars } from '../theme.css'

export const sliderClassName = style({
  display: 'grid',
  gridTemplateAreas: `"label output" "track track"`,
  gridTemplateColumns: '1fr auto',
  maxWidth: '300px',
  color: semanticVars.color.textColor,

  selectors: {
    '&[data-orientation=horizontal]': {
      flexDirection: 'column',
      width: '300px'
    },
    '&[data-orientation=vertical]': {
      width: '30px',
      height: '100%'
    }
  }
})
