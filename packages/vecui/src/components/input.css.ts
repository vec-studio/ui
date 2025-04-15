import { style } from '@vanilla-extract/css'
import { semanticVars } from '../theme.css'
import { colorFieldClassName } from './color-field.css'
import { comboBoxClassName } from './combo-box.css'
import { searchFieldClassName } from './search-field.css'
import { textFieldClassName } from './text-field.css'
import { numberFieldClassName } from './number-field.css'
import { groupClassName } from './group.css'

export const inputClassName = style({
  selectors: {
    // text-field
    [`${textFieldClassName} &`]: {
      padding: '0.286rem',
      margin: 0,
      border: `1px solid ${semanticVars.color.borderColor}`,
      borderRadius: '6px',
      background: semanticVars.color.fieldBackground,
      fontSize: '1.143rem',
      color: semanticVars.color.fieldTextColor
    },
    [`${textFieldClassName} &[data-focused]`]: {
      outline: `2px solid ${semanticVars.color.focusRingColor}`,
      outlineOffset: '-1px'
    },
    [`${textFieldClassName} &[data-invalid]`]: {
      borderColor: semanticVars.color.invalidColor
    },
    [`${textFieldClassName} &[data-disabled]`]: {
      borderColor: semanticVars.color.borderColorDisabled,
      color: semanticVars.color.textColorDisabled
    },
    // search-field
    [`${searchFieldClassName} &`]: {
      gridArea: 'input',
      padding: '0.286rem 1.714rem 0.286rem 0.286rem',
      margin: 0,
      border: `1px solid ${semanticVars.color.borderColor}`,
      borderRadius: '6px',
      background: semanticVars.color.fieldBackground,
      fontSize: '1.143rem',
      color: semanticVars.color.fieldTextColor,
      outline: 'none'
    },
    [`${searchFieldClassName} &::-webkit-search-cancel-button, ${searchFieldClassName} &::-webkit-search-decoration`]: {
      WebkitAppearance: 'none'
    },
    [`${searchFieldClassName} &::placeholder`]: {
      color: semanticVars.color.textColorPlaceholder,
      opacity: 1
    },
    [`${searchFieldClassName} &[data-focused]`]: {
      outline: `2px solid ${semanticVars.color.focusRingColor}`,
      outlineOffset: '-1px'
    },
    [`${searchFieldClassName} &[data-invalid]`]: {
      borderColor: semanticVars.color.invalidColor
    },
    [`${searchFieldClassName} &[data-disabled]`]: {
      borderColor: semanticVars.color.borderColorDisabled,
      color: semanticVars.color.textColorDisabled
    },
    // color field
    [`${colorFieldClassName} &`]: {
      padding: '0.286rem',
      margin: 0,
      border: `1px solid ${semanticVars.color.borderColor}`,
      borderRadius: '6px',
      background: semanticVars.color.fieldBackground,
      fontSize: '1.143rem',
      color: semanticVars.color.fieldTextColor,
      width: '100%',
      maxWidth: '12ch',
      boxSizing: 'border-box'
    },
    [`${colorFieldClassName} &[data-focused]`]: {
      outline: `2px solid ${semanticVars.color.focusRingColor}`,
      outlineOffset: '-1px'
    },
    [`${colorFieldClassName}[data-invalid] &`]: {
      borderColor: semanticVars.color.invalidColor
    },
    [`${colorFieldClassName} &[data-disabled]`]: {
      borderColor: semanticVars.color.borderColor,
      color: semanticVars.color.textColorDisabled
    },
    // combo box
    [`${comboBoxClassName} &`]: {
      margin: 0,
      fontSize: '1.072rem',
      background: semanticVars.color.fieldBackground,
      color: semanticVars.color.fieldTextColor,
      border: `1px solid ${semanticVars.color.borderColor}`,
      borderRadius: '6px',
      padding: '0.286rem 2rem 0.286rem 0.571rem',
      verticalAlign: 'middle',
      outline: 'none'
    },
    [`${comboBoxClassName} &[data-focused]`]: {
      outline: `2px solid ${semanticVars.color.focusRingColor}`,
      outlineOffset: '-1px'
    },
    [`${comboBoxClassName} &[data-disabled]`]: {
      borderColor: semanticVars.color.borderColorDisabled
    },
    [`${comboBoxClassName} &[data-invalid]:not([data-focused])`]: {
      borderColor: semanticVars.color.invalidColor
    },
    // number field
    [`${numberFieldClassName} &${groupClassName} [data-focus-within] &`]: {
      outline: semanticVars.color.focusRingColor
    },
    [`${numberFieldClassName} ${groupClassName} &`]: {
      background: semanticVars.color.fieldBackground,
      border: `1px solid ${semanticVars.color.borderColor}`,
      borderRadius: '0',
      color: semanticVars.color.fieldTextColor,
      margin: '0 -1px',
      zIndex: 1,
      fontSize: '1rem',
      padding: '0.429rem 0.571rem',
      outline: 'none',
      width: '6rem',
      flex: 1
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
    // group
    [`${groupClassName} &`]: {
      background: '0 0',
      border: 'none',
      color: semanticVars.color.textColor,
      fontSize: '1rem',
      margin: '0',
      outline: 'none',
      padding: '.286rem'
    }
  }
})
