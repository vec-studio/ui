import { createVar, globalStyle, keyframes, style } from '@vanilla-extract/css'
import { semanticVars, themeVars } from '../theme.css'
import { calendarClassName } from './calendar.css'
import { comboBoxClassName } from './combo-box.css'
import { datePickerClassName } from './date-picker.css'
import { dateRangePickerClassName } from './date-range-picker.css'
import { disclosureClassName } from './disclosure.css'
import { gridListItemClassName } from './grid-list-item.css'
import { gridListClassName } from './grid-list.css'
import { rangeCalendarClassName } from './range-calendar.css'
import { searchFieldClassName } from './search-field.css'
import { selectClassName } from './select.css'
import { numberFieldClassName } from './number-field.css'
import { groupClassName } from './group.css'
import { treeClassName } from './tree.css'
import { treeItemClassName, treeItemPaddingVar } from './tree-item.css'
import { toolbarClassName } from './toolbar.css'
import { textFieldClassName } from './text-field.css'

export const buttonHighlightHoverVar = createVar()
export const buttonHighlightPressedVar = createVar()

export const buttonClassName = style({
  color: semanticVars.color.textColor,
  background: semanticVars.color.buttonBackground,
  border: `1px solid ${semanticVars.color.borderColor}`,
  borderRadius: '4px',
  appearance: 'none',
  verticalAlign: 'middle',
  fontSize: '1rem',
  textAlign: 'center',
  margin: 0,
  outline: 'none',
  padding: '6px 10px',
  textDecoration: 'none',

  selectors: {
    '&[data-pressed]': {
      boxShadow: 'inset 0 1px 2px rgb(0 0 0 / 0.1)',
      background: semanticVars.color.buttonBackgroundPressed,
      borderColor: semanticVars.color.borderColorPressed
    },
    '&[data-focus-visible]': {
      outline: `2px solid ${semanticVars.color.focusRingColor}`,
      outlineOffset: '-1px'
    },
    '&[data-disabled]': {
      borderColor: semanticVars.color.borderColorDisabled,
      color: semanticVars.color.textColorDisabled
    },
    // seach-field
    [`${searchFieldClassName} &`]: {
      gridArea: 'button',
      width: '1.143rem',
      height: '1.143rem',
      borderRadius: '1.143rem',
      marginLeft: '-1.429rem',
      fontSize: '0.857rem',
      lineHeight: '0.857rem',
      verticalAlign: 'middle',
      textAlign: 'center',
      background: themeVars.color.gray500,
      color: themeVars.color.gray50,
      border: 'none',
      padding: 0
    },
    [`${searchFieldClassName} &[data-pressed]`]: {
      background: themeVars.color.gray600
    },
    // select
    [`${selectClassName} &`]: {
      boxShadow: '0 1px 2px rgba(0 0 0 / 0.1)',
      borderRadius: '6px',
      fontSize: '1.072rem',
      padding: '0.286rem 0.286rem 0.286rem 0.571rem',
      display: 'flex',
      alignItems: 'center',
      maxWidth: '250px'
    },
    [`${selectClassName} &[data-focus-visible]`]: {
      outline: `2px solid ${semanticVars.color.focusRingColor}`,
      outlineOffset: '-1px'
    },
    // select
    [`${selectClassName} &[data-disabled]`]: {
      borderColor: semanticVars.color.borderColorDisabled,
      color: semanticVars.color.textColorDisabled
    },
    // combo box
    [`${comboBoxClassName} &`]: {
      background: semanticVars.color.highlightBackground,
      color: semanticVars.color.highlightForeground,
      forcedColorAdjust: 'none',
      borderRadius: '4px',
      border: 'none',
      marginLeft: '-1.714rem',
      width: '1.429rem',
      height: '1.429rem',
      padding: 0,
      fontSize: '0.857rem',
      cursor: 'default'
    },
    [`${comboBoxClassName} &[data-pressed]`]: {
      boxShadow: 'none',
      background: semanticVars.color.highlightBackground
    },
    [`${comboBoxClassName} &[data-disabled]`]: {
      background: semanticVars.color.borderColorDisabled
    },
    // calendar
    [`${calendarClassName} &`]: {
      width: '2rem',
      height: '2rem',
      padding: 0
    },
    // date picker
    [`${datePickerClassName} &`]: {
      background: semanticVars.color.highlightBackground,
      color: semanticVars.color.highlightForeground,
      border: `2px solid ${semanticVars.color.fieldBackground}`,
      forcedColorAdjust: 'none',
      borderRadius: '4px',
      marginLeft: '-1.929rem',
      width: '1.429rem',
      height: '1.429rem',
      padding: '0',
      fontSize: '0.857rem',
      boxSizing: 'content-box'
    },
    [`${datePickerClassName} &[data-pressed]`]: {
      boxShadow: 'none',
      background: semanticVars.color.highlightBackground
    },
    [`${datePickerClassName} &[data-focus-visible]`]: {
      outline: `2px solid ${semanticVars.color.focusRingColor}`,
      outlineOffset: '2px'
    },
    // range calendar
    [`${rangeCalendarClassName} &`]: {
      width: '2rem',
      height: '2rem',
      padding: 0
    },
    // date range picker
    [`${dateRangePickerClassName} &`]: {
      background: semanticVars.color.highlightBackground,
      color: semanticVars.color.highlightForeground,
      border: `2px solid ${semanticVars.color.fieldBackground}`,
      forcedColorAdjust: 'none',
      borderRadius: '4px',
      marginLeft: 'auto',
      width: '1.429rem',
      height: '1.429rem',
      padding: '0',
      fontSize: '0.857rem',
      boxSizing: 'content-box',
      flexShrink: 0,
      position: 'sticky',
      right: 0
    },
    [`${dateRangePickerClassName} &[data-focus-visible]`]: {
      outline: `2px solid ${semanticVars.color.focusRingColor}`,
      outlineOffset: '2px'
    },
    // disclosure
    [`${disclosureClassName} &[slot=trigger]`]: {
      background: 'none',
      border: 'none',
      boxShadow: 'none',
      fontWeight: 'bold',
      fontSize: '1.142rem',
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    // grid list
    [`${gridListClassName} ${gridListItemClassName}[data-selected] &`]: {
      vars: {
        [buttonHighlightHoverVar]: 'rgb(255 255 255 / 0.1)',
        [buttonHighlightPressedVar]: 'rgb(255 255 255 / 0.2)'
      },
      color: semanticVars.color.highlightForeground
    },
    [`${gridListClassName} ${gridListItemClassName} &:not([slot])`]: {
      marginLeft: 'auto'
    },
    [`${gridListClassName} ${gridListItemClassName} &`]: {
      background: 'transparent',
      border: 'none',
      fontSize: '1.2rem',
      lineHeight: '1.2em',
      padding: '0.286rem 0.429rem',
      transition: 'background 200ms'
    },
    [`${gridListClassName} ${gridListItemClassName} &[data-hovered]`]: {
      background: buttonHighlightHoverVar
    },
    [`${gridListClassName} ${gridListItemClassName} &[data-pressed]`]: {
      background: buttonHighlightPressedVar,
      boxShadow: 'none'
    },
    // number field
    [`${numberFieldClassName} &${groupClassName} [data-focus-within] &`]: {
      outline: semanticVars.color.focusRingColor
    },
    [`${numberFieldClassName} &`]: {
      fontSize: '1.4rem',
      width: '2.3rem',
      padding: '0'
    },
    [`${numberFieldClassName} &[slot=decrement]`]: {
      borderStartEndRadius: '0',
      borderEndEndRadius: '0'
    },
    [`${numberFieldClassName} &[slot=increment]`]: {
      borderStartStartRadius: '0',
      borderEndStartRadius: '0'
    },
    [`${numberFieldClassName}[data-invalid] &`]: {
      borderColor: semanticVars.color.invalidColor
    },
    [`${numberFieldClassName}[data-invalid]:focus-within &`]: {
      borderColor: semanticVars.color.focusRingColor
    },
    [`${numberFieldClassName} &[data-disabled]`]: {
      borderColor: semanticVars.color.borderColorDisabled,
      color: semanticVars.color.textColorDisabled
    },
    // tree
    [`${treeClassName} ${treeItemClassName} &[slot=chevron]`]: {
      all: 'unset',
      display: 'flex',
      visibility: 'hidden',
      alignItems: 'center',
      justifyContent: 'center',
      width: '1.3rem',
      height: '100%',
      paddingLeft: `calc((var(--tree-item-level) - 1) * ${treeItemPaddingVar})`
    },
    [`${treeClassName} ${treeItemClassName}[data-has-child-items] &[slot=chevron]`]: {
      visibility: 'visible'
    },
    // group
    [`${textFieldClassName} ${groupClassName} &`]: {
      borderWidth: '0 0 0 1px',
      borderRadius: '0 6px 6px 0',
      alignSelf: 'stretch',
      padding: '0 6px',
      fontSize: '1.5rem'
    }
  }
})

export const toggleAnimation = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 }
})

globalStyle(`${selectClassName} ${buttonClassName}[dataDisabled] span[aria-hidden]`, {
  background: semanticVars.color.borderColorDisabled,
  color: semanticVars.color.textColorDisabled
})

// disclosure
globalStyle(`${disclosureClassName} ${buttonClassName}[slot=trigger] svg`, {
  rotate: '0deg',
  transition: 'rotate 200ms',
  width: '12px',
  height: '12px',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: '3px'
})

globalStyle(`${disclosureClassName}[data-expanded] ${buttonClassName}[slot=trigger] svg`, {
  rotate: '90deg'
})

// tree
globalStyle(`${treeClassName} ${treeItemClassName} ${buttonClassName}[slot=chevron] svg`, {
  rotate: '0deg',
  transition: 'rotate 200ms',
  width: '12px',
  height: '12px',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: '3px'
})

globalStyle(`${treeClassName} ${treeItemClassName}[data-expanded] ${buttonClassName}[slot=chevron] svg`, {
  rotate: '90deg'
})
