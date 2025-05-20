import { clsx } from 'clsx'
import { type FunctionComponent, type PropsWithChildren } from 'react'
import { pageClassName } from './page.css'

export const Page: FunctionComponent<PropsWithChildren<{ className?: string }>> = props => {
  return <div className={clsx(pageClassName, props.className)}>{props.children}</div>
}
