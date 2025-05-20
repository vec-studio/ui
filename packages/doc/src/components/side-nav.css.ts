import { globalStyle, style } from '@vanilla-extract/css'
import { themeVars } from 'vecui'

export const border = `1px solid ${themeVars.color.gray20}`

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
globalStyle(`${sideNavHeadClassName} > h1`, {
  fontWeight: '600',
  fontSize: '1.285rem'
})

export const sideNavContentClassName = style({})

export const sideNavContentSectionClassName = style({
  selectors: {
    '&:last-child': {
      borderBottom: border
    }
  },

  borderBottom: border
})
globalStyle(`${sideNavContentSectionClassName} > ul`, {
  listStyle: 'none',
  margin: '1.142rem 0 1.142rem 3rem',
  padding: '0'
})
globalStyle(`${sideNavContentSectionClassName} > ul > li`, {
  height: '2.285rem',
  lineHeight: '2.285rem'
})
globalStyle(`${sideNavContentSectionClassName} > ul > li >a`, {
  fontWeight: '700',
  color: themeVars.color.gray100,
  textDecoration: 'none'
})
