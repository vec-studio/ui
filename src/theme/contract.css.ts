import { createThemeContract } from '@vanilla-extract/css'
import { tokens, type Tokens } from './token.css'

export const themeContract = createThemeContract<{ [K in keyof Tokens]: null }>(tokens)
