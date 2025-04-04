import { createVar, globalStyle, style } from '@vanilla-extract/css'
import { semanticVars } from '../theme.css'
import { overlayArrowClassName } from './overlay-arrow.css'

export const popoverBackgroundColorVar = createVar()
export const popoverOriginVar = createVar()
export const popoverTriggerWidthVar = createVar()

export const popoverClassName = style({
  vars: {
    [popoverBackgroundColorVar]: semanticVars.color.overlayBackground,
    [popoverOriginVar]: 'initial',
    [popoverTriggerWidthVar]: 'initial'
  },
  border: `1px solid ${semanticVars.color.borderColor}`,
  boxShadow: '0 8px 20px rgba(0 0 0 / 0.1)',
  borderRadius: '6px',
  background: popoverBackgroundColorVar,
  color: semanticVars.color.textColor,
  outline: 'none',
  maxWidth: '250px',
  transition: 'transform 200ms, opacity 200ms',

  selectors: {
    [`&[data-entering], &[data-exiting]`]: {
      transform: popoverOriginVar,
      opacity: 0
    },
    '&[data-placement=top]': {
      vars: {
        [popoverOriginVar]: 'translateX(8px)'
      }
    },
    [`&[data-placement=top]:has(${overlayArrowClassName})`]: {
      marginBottom: '6px'
    },
    '&[data-placement=bottom]': {
      vars: {
        [popoverOriginVar]: 'translateX(-8px)'
      }
    },
    [`&[data-placement=bottom]:has(${overlayArrowClassName})`]: {
      marginTop: '6px'
    },
    '&[data-placement=right]': {
      vars: {
        [popoverOriginVar]: 'translateX(-8px)'
      }
    },
    [`&[data-placement=right]:has(${overlayArrowClassName})`]: {
      marginLeft: '6px'
    },
    '&[data-placement=left]': {
      vars: {
        [popoverOriginVar]: 'translateX(8px)'
      }
    },
    [`&[data-placement=left]:has(${overlayArrowClassName})`]: {
      marginRight: '6px'
    },
    // select
    '&[data-trigger=Select]': {
      minWidth: popoverTriggerWidthVar
    },
    // combo box
    [`&[data-trigger=ComboBox]`]: {
      width: popoverTriggerWidthVar
    },
    // date picker
    '&[data-trigger=DatePicker]': {
      maxWidth: 'unset'
    },
    // date range picker
    '&[data-trigger=DateRangePicker]': {
      maxWidth: 'unset'
    }
  }
})

globalStyle(`${popoverClassName}[data-placement=bottom] ${overlayArrowClassName} svg`, {
  transform: 'rotate(180deg)'
})

globalStyle(`${popoverClassName}[data-placement=right] ${overlayArrowClassName} svg`, {
  transform: 'rotate(90deg)'
})

globalStyle(`${popoverClassName}[data-placement=left] ${overlayArrowClassName} svg`, {
  transform: 'rotate(-90deg)'
})

globalStyle(`${popoverClassName} ${overlayArrowClassName} svg`, {
  display: 'block',
  fill: popoverBackgroundColorVar,
  stroke: semanticVars.color.borderColor,
  strokeWidth: '1px'
})

// menu
globalStyle(`${popoverClassName}[data-trigger=SubmenuTrigger][data-placement="right"]`, {
  marginLeft: '-5px'
})

globalStyle(`${popoverClassName}[data-trigger=SubmenuTrigger][data-placement="left"]`, {
  marginRight: '-5px'
})
