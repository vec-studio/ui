import { style } from '@vanilla-extract/css'

export const buttonPageClassName = style({
  display: 'grid',
  gap: '1rem 2rem',
  gridTemplateColumns: 'max-content max-content max-content',
  margin: '3rem'
})

export const buttonGroupClassName = style({
  display: 'flex',
  gap: '1.5rem',

  selectors: {
    '&:nth-child(12n)': {
      marginBottom: '3rem'
    }
  }
})
