import { createVar, globalStyle, style } from '@vanilla-extract/css'
import { semanticVars, themeVars } from '../theme.css'

export const meterFillColorVar = createVar()

export const meterClassName = style({
  vars: {
    [meterFillColorVar]: 'forestgreen'
  },

  display: 'grid',
  gridTemplateAreas: `"label value"
                      "bar bar"`,
  gridTemplateColumns: '1fr auto',
  gap: '4px',
  width: '250px',
  color: semanticVars.color.textColor,

  '@media': {
    '(forced-colors: active)': {
      vars: {
        [meterFillColorVar]: 'Highlight'
      }
    }
  }
})

globalStyle(`${meterClassName} .value`, {
  gridArea: 'value'
})

globalStyle(`${meterClassName} .bar`, {
  gridArea: 'bar',
  boxShadow: `inset 0px 0px 0px 1px ${semanticVars.color.borderColor}`,
  forcedColorAdjust: 'none',
  height: '10px',
  borderRadius: '5px',
  overflow: 'hidden'
})

globalStyle(`${meterClassName} .fill`, {
  background: meterFillColorVar,
  height: '100%'
})
