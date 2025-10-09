import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles'
import { themeVars } from '../theme'
import { color } from '../theme/tokens'

const layoutStyles = defineProperties({
  conditions: {
    sm: { '@media': 'screen and (min-width: 320px)' },
    md: { '@media': 'screen and (min-width: 768px)' },
    lg: { '@media': 'screen and (min-width: 1024px)' }
  },
  defaultCondition: 'md',
  properties: {
    display: {
      none: 'none',
      block: 'block',
      inline: 'inline',
      inlineBlock: 'inline-block',
      flex: 'flex'
    },
    position: ['relative', 'absolute', 'fixed'],
    paddingTop: themeVars.space,
    paddingBottom: themeVars.space,
    paddingLeft: themeVars.space,
    paddingRight: themeVars.space,
    marginTop: themeVars.space,
    marginBottom: themeVars.space,
    marginLeft: themeVars.space,
    marginRight: themeVars.space,
    borderRadius: themeVars.borderRadius,
    gap: themeVars.space,
    alignItems: {
      flexStart: 'flex-start',
      center: 'center',
      flexEnd: 'flex-end'
    },
    justifyContent: {
      flexStart: 'flex-start',
      center: 'center',
      flexEnd: 'flex-end',
      spaceBetween: 'space-between'
    },
    flexDirection: {
      row: 'row',
      rowReverse: 'row-reverse',
      column: 'column',
      columnReverse: 'column-reverse'
    },
    flexWrap: {
      wrap: 'wrap',
      nowrap: 'nowrap'
    },
    flexShrink: [0],
    flexGrow: [0, 1],
    textAlign: ['left', 'center', 'right']
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom']
  }
})

const colorStyles = defineProperties({
  properties: {
    color: color,
    background: color
  }
})

export const atoms = createSprinkles(layoutStyles, colorStyles)
