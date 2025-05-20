import { type FunctionComponent, type PropsWithChildren } from 'react'
import { pageSectionClassName, pageSectionContentClassName, pageSectionTitleClassName } from './page-section.css'

export const PageSection: FunctionComponent<PropsWithChildren<{ title?: string }>> = props => {
  return (
    <div className={pageSectionClassName}>
      {props.title && <div className={pageSectionTitleClassName}>{props.title}</div>}
      <div className={pageSectionContentClassName}>{props.children}</div>
    </div>
  )
}
