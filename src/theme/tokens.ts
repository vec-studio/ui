import openProps from 'open-props'

export const tokens = {
  font: {
    body: openProps.fontSans
  },
  fontSize: {
    xs: openProps.fontSize00,
    sm: openProps.fontSize0,
    md: openProps.fontSize1,
    lg: openProps.fontSize3,
    xl: openProps.fontSize4
  },
  fontWeight: {
    sm: openProps.fontWeight2,
    md: openProps.fontWeight4,
    lg: openProps.fontWeight6
  },
  space: {
    none: '0',
    xs: openProps.size1,
    sm: openProps.size2,
    md: openProps.size3,
    lg: openProps.size4,
    xl: openProps.size5
  },
  borderRadius: {
    none: 'none',
    round: openProps.radiusRound,
    xxs: openProps.radius1,
    xs: openProps.radius2,
    md: openProps.radius3,
    lg: openProps.radius4,
    xl: openProps.radius5,
    xxl: openProps.radius6
  }
}
