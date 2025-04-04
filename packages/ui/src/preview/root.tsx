import clsx from 'clsx'
import { useEffect, useMemo, useState } from 'react'
import { semanticClassName, themeLightClassName } from '../theme.css'
import { Components } from './components'
import { rootClassName } from './root.css'

export function Root() {
  const [themeClassName] = useState(themeLightClassName)

  useEffect(() => {
    const bodyClassNames = [themeClassName, semanticClassName]

    document.body.classList.add(...bodyClassNames)

    return () => {
      document.body.classList.remove(...bodyClassNames)
    }
  }, [themeClassName])

  return (
    <div className={rootClassName}>
      <Components />
    </div>
  )
}
