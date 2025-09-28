import { globalStyle, keyframes, style } from '@vanilla-extract/css'
import { themeVars } from '../theme'

export const progressBarClassName = style({
  display: 'grid',
  gridTemplateAreas: `"label value" "bar bar"`,
  gridTemplateColumns: '1fr auto',
  gap: '4px',
  width: '250px',
  color: themeVars.color.textColor,

  selectors: {}
})

globalStyle(`${progressBarClassName} .value`, {
  gridArea: 'value'
})

globalStyle(`${progressBarClassName} .bar`, {
  gridArea: 'bar',
  boxShadow: `inset 0px 0px 0px 1px ${themeVars.color.borderColor}`,
  forcedColorAdjust: 'none',
  height: '10px',
  borderRadius: '5px',
  overflow: 'hidden',
  willChange: 'transform'
})

globalStyle(`${progressBarClassName} .fill`, {
  background: themeVars.color.highlightBackground,
  height: '100%'
})

const indeterminateKeyframes = keyframes({
  from: {
    transform: 'translateX(-100%)'
  },
  to: {
    transform: 'translateX(250px)'
  }
})

globalStyle(`${progressBarClassName}:not([aria-valuenow]) .fill`, {
  width: '120px',
  borderRadius: 'inherit',
  animation: `${indeterminateKeyframes} 1.5s infinite ease-in-out`,
  willChange: 'transform'
})
