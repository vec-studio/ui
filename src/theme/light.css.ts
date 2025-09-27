import { createTheme } from '@vanilla-extract/css'
import lodash from 'lodash'
import openProps from 'open-props'
import { themeContract } from './contract.css'
import { tokenKeys, type Tokens } from './token.css'

const themeLightTokens = lodash.reduce(
  tokenKeys,
  (prev, curr) => {
    // @ts-ignore
    prev[curr] = openProps[curr]
    return prev
  },
  {}
) as { [K in keyof Tokens]: string }

export const themeLightClassName = createTheme(themeContract, themeLightTokens)
