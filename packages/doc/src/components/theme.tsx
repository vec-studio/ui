import clsx from 'clsx'
import { type PropsWithChildren, useState } from 'react'
import { semanticClassName, themeLightClassName } from 'vecui'

export function Theme(props: PropsWithChildren) {
  const [themeClassName] = useState(themeLightClassName)

  return <div className={clsx(themeClassName, semanticClassName)}>{props.children}</div>
}
