import { type FunctionComponent } from 'react'
import { pageHeaderClassName } from './page-header.css'

export const PageHeader: FunctionComponent<{ title: string; description: string }> = props => {
  return (
    <div className={pageHeaderClassName}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  )
}
