import { globalStyle, style } from '@vanilla-extract/css'

export const buttonPageClassName = style({})

export const buttonPageStatesClassName = style({
  display: 'grid',
  gridTemplateColumns: '1fr repeat(5, max-content)',
  gap: '1.142rem'
})

export const buttonPageStatesButtonClassName = style({
  width: 'fit-content'
})
