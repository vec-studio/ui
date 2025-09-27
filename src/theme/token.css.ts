import lodash from 'lodash'
import openProps from 'open-props'

export const tokenKeys = lodash
  .chain(openProps)
  .keys()
  .filter(v => !/^--|@$/.test(v))
  .value()

export const tokens = lodash.reduce(
  tokenKeys,
  (prev, curr) => {
    prev[curr] = null
    return prev
  },
  {} as any
)

export type Tokens = OmitWithSubstring<typeof openProps, '-' | '@'>
export type TokenKeys = keyof Tokens
