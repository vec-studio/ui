import { ProgressBar as RACProgressBar, type ProgressBarProps as RACProgressBarProps } from 'react-aria-components'
import { Label } from './label'
import { progressBarClassName } from './progress-bar.css'
import { cn } from './utils'

export interface ProgressBarProps extends RACProgressBarProps {
  label?: string
}

export function ProgressBar({ label, ...props }: ProgressBarProps) {
  return (
    <RACProgressBar {...props} className={cn(props.className, progressBarClassName)}>
      {({ percentage, valueText }) => (
        <>
          <Label>{label}</Label>
          <span className="value">{valueText}</span>
          <div className="bar">
            <div className="fill" style={{ width: percentage + '%' }} />
          </div>
        </>
      )}
    </RACProgressBar>
  )
}
