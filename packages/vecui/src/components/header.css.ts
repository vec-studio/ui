import { style } from '@vanilla-extract/css'
import { comboBoxClassName } from './combo-box.css'
import { listBoxClassName } from './list-box.css'
import { menuClassName } from './menu.css'
import { popoverClassName } from './popover.css'

export const headerClassName = style({
  selectors: {
    // menu
    [`${menuClassName} &`]: {
      fontSize: '1.143rem',
      fontWeight: 'bold',
      padding: '0 0.714rem'
    },
    // list box
    [`${listBoxClassName} &`]: {
      fontSize: '1.143rem',
      fontWeight: 'bold',
      padding: '0 0.714rem'
    },
    // select
    [`${popoverClassName} ${listBoxClassName} &`]: {
      paddingLeft: '1.571rem'
    },
    // combo box
    [`${comboBoxClassName} ${popoverClassName}[data-trigger=ComboBox] ${listBoxClassName} &`]: {
      paddingLeft: '1.571rem'
    }
  }
})
