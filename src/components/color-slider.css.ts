import { style } from '@vanilla-extract/css'

export const colorSliderClassName = style({
  display: 'grid',
  gridTemplateAreas: `"label output"
                      "track track"`,
  gridTemplateColumns: '1fr auto',
  gap: '4px',
  maxWidth: '300px',

  selectors: {
    '&[data-orientation=vertical]': {
      height: '150px',
      display: 'block'
    }
  }
})
