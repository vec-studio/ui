import { style } from '@vanilla-extract/css'
import { semanticVars } from '../theme.css'
import { comboBoxClassName } from './combo-box.css'
import { popoverClassName } from './popover.css'

export const listBoxClassName = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  overflow: 'auto',
  padding: '4px',
  border: `1px solid ${semanticVars.color.borderColor}`,
  borderRadius: '6px',
  background: semanticVars.color.overlayBackground,
  forcedColorAdjust: 'none',
  outline: 'none',
  width: '250px',
  maxHeight: '300px',
  minHeight: '100px',
  boxSizing: 'border-box',

  selectors: {
    '&[data-focus-visible]': {
      outline: `2px solid ${semanticVars.color.focusRingColor}`,
      outlineOffset: '-1px'
    },
    [`&[data-layout=grid]`]: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      scrollbarGutter: 'stable'
    },
    [`&[data-orientation=horizontal], &[data-layout=grid]`]: {
      flexDirection: 'row',
      width: 'fit-content',
      maxWidth: '100%',
      padding: '4px'
    },
    [`&[data-orientation=horizontal][data-layout=grid]`]: {
      width: '100%',
      maxWidth: 'none',
      display: 'grid',
      gridAutoFlow: 'column',
      gridTemplateRows: '58px 58px',
      gridTemplateColumns: 'none',
      gridAutoColumns: '250px',
      maxHeight: '200px',
      gap: '8px'
    },
    '&[data-empty]': {
      alignItems: 'center',
      justifyContent: 'center',
      fontStyle: 'italic'
    },
    '&[data-drop-target]': {
      outline: `2px solid ${semanticVars.color.highlightBackground}`,
      outlineOffset: '-1px',
      background: semanticVars.color.highlightOverlay
    },
    // select
    [`${popoverClassName} &`]: {
      display: 'block',
      width: 'unset',
      maxHeight: 'inherit',
      minHeight: 'unset',
      border: 'none'
    },
    // combo box
    [`${comboBoxClassName} ${popoverClassName}[data-trigger=ComboBox] &`]: {
      display: 'block',
      width: 'unset',
      maxHeight: 'inherit',
      minHeight: 'unset',
      border: 'none'
    }
  }
})
