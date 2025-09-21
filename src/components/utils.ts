import clsx from 'clsx'

export function cn<T>(className1: string | ((props: T) => string) | undefined, className2: string)
export function cn(className1: string | undefined, className2: string)
export function cn<T>(className1: unknown, className2: string) {
  let className
  if (className1 === undefined) className = className2
  else if (typeof className1 === 'string') className = clsx(className1, className2)
  else if (typeof className1 === 'function') className = (props: T) => clsx(className1(props), className2)
  return className
}
