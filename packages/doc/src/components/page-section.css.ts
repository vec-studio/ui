import { globalStyle, style } from '@vanilla-extract/css'
import { themeVars } from 'vecui'

export const pageSectionClassName = style({
  backgroundColor: themeVars.color.gray10,
  padding: '2.857rem',
  borderRadius: '0.571rem'
})

export const pageSectionTitleClassName = style({
  fontSize: '1.285rem',
  fontWeight: '600',
  lineHeight: '2rem'
})

export const pageSectionContentClassName = style({})

globalStyle(`${pageSectionTitleClassName} + ${pageSectionContentClassName}`, {
  marginTop: '1.142rem'
})
