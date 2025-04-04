import { assignInlineVars } from '@vanilla-extract/dynamic'
import { Modal as RACModal, ModalOverlay as RACModalOverlay, type ModalOverlayProps } from 'react-aria-components'
import { modalClassName, modalOverlayClassName, modalOverlayHeightVar } from './modal.css'
import { cn } from './utils'

export function Modal(props: ModalOverlayProps) {
  return (
    <RACModalOverlay className={modalOverlayClassName} style={assignInlineVars({ [modalOverlayHeightVar]: '100vh' })}>
      <RACModal {...props} className={cn(props.className, modalClassName)} />
    </RACModalOverlay>
  )
}
