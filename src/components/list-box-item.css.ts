import { globalStyle, style } from '@vanilla-extract/css'
import { semanticVars } from '../theme.css'
import { comboBoxClassName } from './combo-box.css'
import { listBoxClassName } from './list-box.css'
import { popoverClassName } from './popover.css'

export const listBoxItemClassName = style({
  padding: '0 0.571rem',
  borderRadius: '6px',
  outline: 'none',
  cursor: 'default',
  color: semanticVars.color.textColor,
  fontSize: '1.072rem',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  minHeight: '32px',
  selectors: {
    '&[data-focus-visible]': {
      outline: `2px solid ${semanticVars.color.focusRingColor}`,
      outlineOffset: '-2px'
    },
    '&[data-selected], &[data-focused]': {
      background: semanticVars.color.highlightBackground,
      color: semanticVars.color.highlightForeground
    },
    '&[data-selected][data-focus-visible]': {
      outlineColor: semanticVars.color.highlightForeground,
      outlineOffset: '-4px'
    },
    '&[href]': {
      textDecoration: 'none',
      cursor: 'pointer',
      WebkitTouchCallout: 'none'
    },
    // list box
    [`${listBoxClassName}[data-orientation=horizontal] &, ${listBoxClassName}[data-layout=grid] &`]: {
      position: 'relative',
      margin: 0,
      padding: '4px'
    },
    [`${listBoxClassName}[data-orientation=horizontal] &[data-selected], ${listBoxClassName}[data-layout=grid] &[data-selected]`]:
      {
        background: 'none',
        color: 'inherit'
      },
    [`${listBoxClassName}[data-orientation=horizontal] &[data-selected]:after, ${listBoxClassName}[data-layout=grid] &[data-selected]:after`]:
      {
        content: '✓',
        position: 'absolute',
        top: '8px',
        right: '8px',
        background: semanticVars.color.highlightBackground,
        border: `2px solid ${semanticVars.color.highlightForeground}`,
        color: semanticVars.color.highlightForeground,
        width: '22px',
        height: '22px',
        borderRadius: '22px',
        boxSizing: 'border-box',
        fontSize: '1rem',
        lineHeight: '1em',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 0 8px rgb(0 0 0 / .5)'
      },
    [`${listBoxClassName}[data-orientation=horizontal] &[data-focus-visible], ${listBoxClassName}[data-layout=grid] &[data-focus-visible]`]:
      {
        outline: `2px solid ${semanticVars.color.focusRingColor}`,
        outlineOffset: '-2px'
      },
    [`${listBoxClassName}[data-orientation=horizontal][data-layout=grid] &`]: {
      display: 'grid',
      gridTemplateAreas: `"image ."
                            "image title"
                            "image description"
                            "image ."`,
      gridTemplateColumns: 'auto 1fr',
      gridTemplateRows: '1fr auto auto 1fr',
      columnGap: '8px'
    },
    [`${listBoxClassName} &[data-disabled]`]: {
      color: semanticVars.color.textColorDisabled
    },
    [`${listBoxClassName} &[data-dragging]`]: {
      opacity: '0.6'
    },
    [`${listBoxClassName} &[data-drop-target]`]: {
      outline: `2px solid ${semanticVars.color.highlightBackground}`,
      background: semanticVars.color.highlightOverlay
    },
    // select
    [`${popoverClassName} &`]: {
      padding: '0 0.571rem 0 1.571rem'
    },
    [`${popoverClassName} &[data-focus-visible]`]: {
      outline: 'none'
    },
    [`${popoverClassName} &[data-selected]`]: {
      fontWeight: 600,
      background: 'unset',
      color: semanticVars.color.textColor
    },
    [`${popoverClassName} &[data-selected]::before`]: {
      content: '"✓"',
      position: 'absolute',
      top: '4px',
      left: '4px'
    },
    [`${popoverClassName} &[data-focused], ${popoverClassName} &[data-pressed]`]: {
      background: semanticVars.color.highlightBackground,
      color: semanticVars.color.highlightForeground
    },
    // combo box
    [`${comboBoxClassName} ${popoverClassName}[data-trigger=ComboBox] &`]: {
      padding: '0 0.571rem 0 1.571rem'
    },
    [`${comboBoxClassName} ${popoverClassName}[data-trigger=ComboBox] &[data-focus-visible]`]: {
      outline: 'none'
    },
    [`${comboBoxClassName} ${popoverClassName}[data-trigger=ComboBox] &[data-selected]`]: {
      fontWeight: 600,
      background: 'unset',
      color: semanticVars.color.textColor
    },
    [`${comboBoxClassName} ${popoverClassName}[data-trigger=ComboBox] &[data-selected]::before`]: {
      content: '✓',
      position: 'absolute',
      top: '4px',
      left: '4px'
    },
    [`${comboBoxClassName} ${popoverClassName}[data-trigger=ComboBox] &[data-focused], ${comboBoxClassName} ${popoverClassName}[data-trigger=ComboBox] &[data-pressed]`]:
      {
        background: semanticVars.color.highlightBackground,
        color: semanticVars.color.highlightForeground
      }
  }
})

globalStyle(`${listBoxItemClassName} [slot=label]`, {
  fontWeight: 'bold'
})

globalStyle(`${listBoxItemClassName} [slot=description]`, {
  fontSize: 'small'
})

globalStyle(
  `${listBoxClassName}[data-orientation=horizontal] ${listBoxItemClassName} img, ${listBoxClassName}[data-layout=grid] ${listBoxItemClassName} img`,
  {
    objectFit: 'cover',
    aspectRatio: '1/1',
    maxWidth: '150px',
    marginBottom: '4px',
    borderRadius: '4px'
  }
)

globalStyle(`${listBoxClassName}[data-orientation=horizontal][data-layout=grid] ${listBoxItemClassName} img`, {
  width: '50px',
  height: '50px',
  gridArea: 'image',
  marginBottom: '0'
})

globalStyle(`${listBoxClassName}[data-orientation=horizontal][data-layout=grid] ${listBoxItemClassName} [slot=label]`, {
  gridArea: 'title'
})

globalStyle(
  `${listBoxClassName}[data-orientation=horizontal][data-layout=grid] ${listBoxItemClassName} [slot=description]`,
  {
    gridArea: 'description'
  }
)
