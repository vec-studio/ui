import { createTheme } from '@vanilla-extract/css'
import lodash from 'lodash'
import openProps from 'open-props'
import { themeContract } from './contract.css'
import { tokenKeys, type Tokens } from './token.css'

const themeLightTokens = lodash.pick(openProps, tokenKeys) as Tokens

export const themeLightClassName = createTheme(themeContract, themeLightTokens)
