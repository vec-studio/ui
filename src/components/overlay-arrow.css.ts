import { globalStyle, style } from '@vanilla-extract/css'
import { themeVars } from '../theme'
import { tooltipClassName } from './tooltip.css'

export const overlayArrowClassName = style({})

globalStyle(`${tooltipClassName}[data-placement=bottom] ${overlayArrowClassName} svg`, {
  transform: 'rotate(180deg)'
})

globalStyle(`${tooltipClassName}[data-placement=right] ${overlayArrowClassName} svg`, {
  transform: 'rotate(90deg)'
})

globalStyle(`${tooltipClassName}[data-placement=left] ${overlayArrowClassName} svg`, {
  transform: 'rotate(-90deg)'
})

globalStyle(`${tooltipClassName} ${overlayArrowClassName} svg`, {
  display: 'block',
  fill: themeVars.color.highlightBackground
})
