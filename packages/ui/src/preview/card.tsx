import { type FunctionComponent, type HTMLAttributes, type ReactNode } from 'react'
import { cardClassName, cardContentClassName, cardTitleClassName } from './card.css'

export const Card: FunctionComponent<{ title: string; children: ReactNode } & HTMLAttributes<HTMLDivElement>> = ({
  title,
  children,
  ...props
}) => {
  return (
    <div {...props} className={cardClassName}>
      <div className={cardTitleClassName}>{title}</div>
      <hr />
      <div className={cardContentClassName}>{children}</div>
    </div>
  )
}
