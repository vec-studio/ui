import clsx from 'clsx'
import { type PropsWithChildren } from 'react'
import { ThemeContext, type ThemeName } from './context'
import { themeDarkClassName } from './dark.css'
import { themeLightClassName } from './light.css'

interface ProviderProps extends PropsWithChildren {
  themeName?: ThemeName
}

export function Provider(props: ProviderProps) {
  const themeName = props.themeName ?? 'light'
  const className = clsx(themeName ? themeLightClassName : themeDarkClassName)

  return (
    <ThemeContext.Provider value={themeName}>
      <div className={className}>{props.children}</div>
    </ThemeContext.Provider>
  )
}
