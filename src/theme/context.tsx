import { createContext } from 'react'

export type ThemeName = 'light' | 'dark'
export const ThemeContext = createContext<ThemeName>('light')
