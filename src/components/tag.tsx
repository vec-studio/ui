import { Tag as RACTag, TagProps as RACTagProps } from 'react-aria-components'
import { Button } from './button'
import { tagClassName } from './tag.css'
import { cn } from './utils'

export function Tag({ children, ...props }: RACTagProps) {
  let textValue = typeof children === 'string' ? children : undefined
  return (
    <RACTag textValue={textValue} {...props} className={cn(props.className, tagClassName)}>
      {({ allowsRemoving }) => (
        <>
          {children}
          {allowsRemoving && <Button slot="remove">ⓧ</Button>}
        </>
      )}
    </RACTag>
  )
}
