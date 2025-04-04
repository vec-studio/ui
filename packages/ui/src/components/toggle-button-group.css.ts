import { globalStyle, style } from '@vanilla-extract/css'

export const toggleButtonGroupClassName = style({
  display: 'flex',

  selectors: {
    '&[data-orientation=horizontal]': {
      flexDirection: 'row'
    },
    '&[data-orientation=vertical]': {
      flexDirection: 'column',
      width: 'fit-content'
    }
  }
})

globalStyle(`${toggleButtonGroupClassName} > button`, {
  borderRadius: '0',
  zIndex: '1'
})

globalStyle(`${toggleButtonGroupClassName} > button[data-disabled]`, {
  zIndex: '0'
})

globalStyle(
  `${toggleButtonGroupClassName} > button[data-selected], ${toggleButtonGroupClassName} > button[data-focus-visible]`,
  {
    zIndex: '2'
  }
)

globalStyle(`${toggleButtonGroupClassName}[data-orientation=horizontal] > button`, {
  marginInlineStart: '-1px'
})

globalStyle(`${toggleButtonGroupClassName}[data-orientation=horizontal] > button:first-child`, {
  borderRadius: '4px 0 0 4px',
  marginInlineStart: '0'
})

globalStyle(`${toggleButtonGroupClassName}[data-orientation=horizontal] > button:last-child`, {
  borderRadius: '0 4px 4px 0'
})

globalStyle(`${toggleButtonGroupClassName}[data-orientation=vertical] > button`, {
  marginBlockStart: '-1px'
})

globalStyle(`${toggleButtonGroupClassName}[data-orientation=vertical] > button:first-child`, {
  borderRadius: '4px 4px 0 0',
  marginBlockStart: '0'
})

globalStyle(`${toggleButtonGroupClassName}[data-orientation=vertical] > button:last-child`, {
  borderRadius: '0 0 4px 4px'
})
