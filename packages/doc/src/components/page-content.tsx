import { type FunctionComponent, type PropsWithChildren } from 'react'
import { pageContentClassName } from './page-content.css'

export const PageContent: FunctionComponent<PropsWithChildren> = props => {
  return <div className={pageContentClassName}>{props.children}</div>
}
