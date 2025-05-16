import { SquareArrowOutUpRightIcon } from 'lucide-react'
import { type FunctionComponent, type HTMLAttributes } from 'react'
import { Link } from 'vecui'
import { cardClassName, cardContentClassName, cardLinkClassName, cardTitleClassName } from './card.css'

export const SideNav: FunctionComponent<{} & HTMLAttributes<HTMLDivElement>> = props => {
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
