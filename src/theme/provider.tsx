import clsx from 'clsx'
import { type PropsWithChildren } from 'react'
import { ThemeContext, type ThemeName } from './context'
import { themeDarkClassName } from './dark.css'
import { themeLightClassName } from './light.css'
import { semanticClassName } from './semantic.css'

interface ProviderProps extends PropsWithChildren {
  themeName?: ThemeName
}

export function Provider(props: ProviderProps) {
  const className = clsx(props.themeName === 'light' ? themeLightClassName : themeDarkClassName, semanticClassName)

  return (
    <ThemeContext.Provider value={props.themeName ?? 'light'}>
      <div className={className}>{props.children}</div>
    </ThemeContext.Provider>
  )
}
