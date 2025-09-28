import { style } from '@vanilla-extract/css'
import { themeVars } from '../theme'
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
      border: `1px solid ${themeVars.color.borderColor}`,
      borderRadius: '6px',
      background: themeVars.color.fieldBackground,
      fontSize: '1.143rem',
      color: themeVars.color.fieldTextColor
    },
    [`${textFieldClassName} &[data-focused]`]: {
      outline: `2px solid ${themeVars.color.focusRingColor}`,
      outlineOffset: '-1px'
    },
    [`${textFieldClassName} &[data-invalid]`]: {
      borderColor: themeVars.color.invalidColor
    },
    [`${textFieldClassName} &[data-disabled]`]: {
      borderColor: themeVars.color.borderColorDisabled,
      color: themeVars.color.textColorDisabled
    },
    // search-field
    [`${searchFieldClassName} &`]: {
      gridArea: 'input',
      padding: '0.286rem 1.714rem 0.286rem 0.286rem',
      margin: 0,
      border: `1px solid ${themeVars.color.borderColor}`,
      borderRadius: '6px',
      background: themeVars.color.fieldBackground,
      fontSize: '1.143rem',
      color: themeVars.color.fieldTextColor,
      outline: 'none'
    },
    [`${searchFieldClassName} &::-webkit-search-cancel-button, ${searchFieldClassName} &::-webkit-search-decoration`]: {
      WebkitAppearance: 'none'
    },
    [`${searchFieldClassName} &::placeholder`]: {
      color: themeVars.color.textColorPlaceholder,
      opacity: 1
    },
    [`${searchFieldClassName} &[data-focused]`]: {
      outline: `2px solid ${themeVars.color.focusRingColor}`,
      outlineOffset: '-1px'
    },
    [`${searchFieldClassName} &[data-invalid]`]: {
      borderColor: themeVars.color.invalidColor
    },
    [`${searchFieldClassName} &[data-disabled]`]: {
      borderColor: themeVars.color.borderColorDisabled,
      color: themeVars.color.textColorDisabled
    },
    // color field
    [`${colorFieldClassName} &`]: {
      padding: '0.286rem',
      margin: 0,
      border: `1px solid ${themeVars.color.borderColor}`,
      borderRadius: '6px',
      background: themeVars.color.fieldBackground,
      fontSize: '1.143rem',
      color: themeVars.color.fieldTextColor,
      width: '100%',
      maxWidth: '12ch',
      boxSizing: 'border-box'
    },
    [`${colorFieldClassName} &[data-focused]`]: {
      outline: `2px solid ${themeVars.color.focusRingColor}`,
      outlineOffset: '-1px'
    },
    [`${colorFieldClassName}[data-invalid] &`]: {
      borderColor: themeVars.color.invalidColor
    },
    [`${colorFieldClassName} &[data-disabled]`]: {
      borderColor: themeVars.color.borderColor,
      color: themeVars.color.textColorDisabled
    },
    // combo box
    [`${comboBoxClassName} &`]: {
      margin: 0,
      fontSize: '1.072rem',
      background: themeVars.color.fieldBackground,
      color: themeVars.color.fieldTextColor,
      border: `1px solid ${themeVars.color.borderColor}`,
      borderRadius: '6px',
      padding: '0.286rem 2rem 0.286rem 0.571rem',
      verticalAlign: 'middle',
      outline: 'none'
    },
    [`${comboBoxClassName} &[data-focused]`]: {
      outline: `2px solid ${themeVars.color.focusRingColor}`,
      outlineOffset: '-1px'
    },
    [`${comboBoxClassName} &[data-disabled]`]: {
      borderColor: themeVars.color.borderColorDisabled
    },
    [`${comboBoxClassName} &[data-invalid]:not([data-focused])`]: {
      borderColor: themeVars.color.invalidColor
    },
    // number field
    [`${numberFieldClassName} &${groupClassName} [data-focus-within] &`]: {
      outline: themeVars.color.focusRingColor
    },
    [`${numberFieldClassName} ${groupClassName} &`]: {
      background: themeVars.color.fieldBackground,
      border: `1px solid ${themeVars.color.borderColor}`,
      borderRadius: '0',
      color: themeVars.color.fieldTextColor,
      margin: '0 -1px',
      zIndex: 1,
      fontSize: '1rem',
      padding: '0.429rem 0.571rem',
      outline: 'none',
      width: '6rem',
      flex: 1
    },
    [`${numberFieldClassName}[data-invalid] &`]: {
      borderColor: themeVars.color.invalidColor
    },
    [`${numberFieldClassName}[data-invalid]:focus-within &`]: {
      borderColor: themeVars.color.focusRingColor
    },
    [`${numberFieldClassName} &[data-disabled]`]: {
      borderColor: themeVars.color.borderColorDisabled,
      color: themeVars.color.textColorDisabled
    },
    // group
    [`${groupClassName} &`]: {
      background: '0 0',
      border: 'none',
      color: themeVars.color.textColor,
      fontSize: '1rem',
      margin: '0',
      outline: 'none',
      padding: '.286rem'
    }
  }
})
