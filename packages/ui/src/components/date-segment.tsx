import { DateSegment as RACDateSegment, type DateSegmentProps as RACDateSegmentProps } from 'react-aria-components'
import { dateSegmentClassName } from './date-segment.css'
import { cn } from './utils'

export type DateSegmentProps = RACDateSegmentProps

export function DateSegment(props: DateSegmentProps) {
  return <RACDateSegment {...props} className={cn(props.className, dateSegmentClassName)} />
}
