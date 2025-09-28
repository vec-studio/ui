import { style } from '@vanilla-extract/css'
import openProps from 'open-props'
import { themeVars } from '../theme'
import { breadcrumbsClassName } from './breadcrumbs.css'

export const linkClassName = style({
  color: openProps.gray10,
  fontSize: '1.285rem',
  transition: 'all 200ms',
  textDecoration: 'underline',
  cursor: 'pointer',
  outline: 'none',
  position: 'relative',

  selectors: {
    '&[data-hovered]': {
      textDecorationStyle: 'wavy'
    },
    '&[data-pressed]': {
      color: themeVars.color.linkColorPressed
    },
    '&[data-focus-visible]::after': {
      content: '',
      position: 'absolute',
      inset: '-3px -6px',
      borderRadius: '6px',
      border: `2px solid ${themeVars.color.focusRingColor}`
    },
    '&[data-disabled]': {
      cursor: 'default',
      color: themeVars.color.textColorDisabled
    },
    // breadcurmb
    [`${breadcrumbsClassName} &`]: {
      color: themeVars.color.linkColorSecondary,
      outline: 'none',
      position: 'relative',
      textDecoration: 'none',
      cursor: 'pointer'
    },
    [`${breadcrumbsClassName} &[data-hovered]`]: {
      textDecoration: 'underline'
    },
    [`${breadcrumbsClassName} &[data-current]`]: {
      color: 'var(--text-color)',
      fontWeight: 'bold'
    },
    [`${breadcrumbsClassName} &[data-focus-visible]::after`]: {
      content: '',
      position: 'absolute',
      inset: '-2px -4px',
      borderRadius: '6px',
      border: `2px solid ${themeVars.color.focusRingColor}`
    },
    [`${breadcrumbsClassName} &[data-disabled]`]: {
      cursor: 'default'
    },
    [`${breadcrumbsClassName} &[data-disabled]:not([data-current])`]: {
      color: themeVars.color.textColorDisabled
    }
  }
})
