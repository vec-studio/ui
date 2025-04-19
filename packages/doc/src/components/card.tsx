import { SquareArrowOutUpRightIcon } from 'lucide-react'
import { type FunctionComponent, type HTMLAttributes, type ReactNode } from 'react'
import { Link } from 'vecui'
import { cardClassName, cardContentClassName, cardLinkClassName, cardTitleClassName } from './card.css'
import { type RouterConfig } from 'react-aria-components'

export const Card: FunctionComponent<
  { title: string; children: ReactNode; to?: RouterConfig['href'] } & HTMLAttributes<HTMLDivElement>
> = ({ title, children, to, ...props }) => {
  return (
    <div {...props} className={cardClassName}>
      <Link className={cardLinkClassName} href={to}>
        <SquareArrowOutUpRightIcon size="1rem" />
      </Link>
      <div className={cardTitleClassName}>{title}</div>
      <hr />
      <div className={cardContentClassName}>{children}</div>
    </div>
  )
}
