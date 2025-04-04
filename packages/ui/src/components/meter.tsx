import { Meter as RACMeter, MeterProps as RACMeterProps } from 'react-aria-components'
import { Label } from './label'
import { meterClassName } from './meter.css'
import { cn } from './utils'

export interface MeterProps extends RACMeterProps {
  label?: string
}

export function Meter({ label, ...props }: MeterProps) {
  return (
    <RACMeter {...props} className={cn(props.className, meterClassName)}>
      {({ percentage, valueText }) => (
        <>
          <Label>{label}</Label>
          <span className="value">{valueText}</span>
          <div className="bar">
            <div className="fill" style={{ width: percentage + '%' }} />
          </div>
        </>
      )}
    </RACMeter>
  )
}
