import { globalStyle, style } from '@vanilla-extract/css'
import { semanticVars } from '../theme.css'
import { popoverClassName } from './popover.css'
import { autocompleteClassName } from './autocomplete.css'

export const searchFieldClassName = style({
  display: 'grid',
  gridTemplateAreas: `"label label"
                      "input button"
                      "help  help"`,
  gridTemplateColumns: '1fr auto',
  alignItems: 'center',
  width: 'fit-content',
  color: semanticVars.color.textColor,

  selectors: {
    // menu
    [`${popoverClassName}[data-trigger=SubmenuTrigger] &`]: {
      margin: '4px 8px'
    },
    // autocomplete
    [`${autocompleteClassName} &`]: {
      width: '100%'
    }
  }
})

globalStyle(`${searchFieldClassName}[data-empty] button`, {
  display: 'none'
})

globalStyle(`${searchFieldClassName} [slot=description]`, {
  gridArea: 'help',
  fontSize: '0.857rem'
})
