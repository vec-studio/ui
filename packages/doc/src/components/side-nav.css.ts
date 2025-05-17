import { globalStyle, style } from '@vanilla-extract/css'
import { themeVars } from 'vecui'

const border = `1px solid ${themeVars.color.gray20}`

export const sideNavClassName = style({
  width: '19rem',
  height: '100%',
  borderRight: border
})

export const sideNavHeadClassName = style({
  height: '4.5rem',
  borderBottom: border,
  display: 'flex',
  alignItems: 'center',
  paddingLeft: '3rem'
})
globalStyle(`${sideNavHeadClassName} > img`, {})
globalStyle(`${sideNavHeadClassName} > h1`, {})

export const sideNavContentClassName = style({})

export const sideNavContentSectionClassName = style({
  selectors: {
    '&:last-child': {
      borderBottom: border
    }
  },

  borderBottom: border
})
