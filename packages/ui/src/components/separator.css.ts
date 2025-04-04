import { style } from '@vanilla-extract/css'
import { semanticVars } from '../theme.css'
import { menuClassName } from './menu.css'
import { toolbarClassName } from './toolbar.css'

export const separatorClassName = style({
  alignSelf: 'stretch',
  backgroundColor: semanticVars.color.buttonBackground,

  selectors: {
    // menu
    [`${menuClassName} &`]: {
      background: semanticVars.color.borderColor,
      height: '1px',
      margin: '2px 4px'
    },
    // toolbar
    [`${toolbarClassName} &`]: {
      alignSelf: 'stretch',
      backgroundColor: semanticVars.color.borderColor
    },
    [`${toolbarClassName} &[aria-orientation=vertical]`]: {
      margin: '0px 10px',
      width: '1px'
    },
    [`${toolbarClassName} &:not([aria-orientation=vertical])`]: {
      border: 'none',
      height: '1px',
      margin: '10px 0',
      width: '100%'
    }
  }
})
