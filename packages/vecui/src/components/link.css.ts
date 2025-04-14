import { style } from '@vanilla-extract/css'
import { semanticVars } from '../theme.css'
import { breadcrumbsClassName } from './breadcrumbs.css'

export const linkClassName = style({
  color: semanticVars.color.linkColor,
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
      color: semanticVars.color.linkColorPressed
    },
    '&[data-focus-visible]::after': {
      content: '',
      position: 'absolute',
      inset: '-3px -6px',
      borderRadius: '6px',
      border: `2px solid ${semanticVars.color.focusRingColor}`
    },
    '&[data-disabled]': {
      cursor: 'default',
      color: semanticVars.color.textColorDisabled
    },
    // breadcurmb
    [`${breadcrumbsClassName} &`]: {
      color: semanticVars.color.linkColorSecondary,
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
      border: `2px solid ${semanticVars.color.focusRingColor}`
    },
    [`${breadcrumbsClassName} &[data-disabled]`]: {
      cursor: 'default'
    },
    [`${breadcrumbsClassName} &[data-disabled]:not([data-current])`]: {
      color: semanticVars.color.textColorDisabled
    }
  }
})
