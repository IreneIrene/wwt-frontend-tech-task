import { ReactNode } from 'react'
import { createPortal } from 'react-dom'

type ModalProps = {
	children: ReactNode
}

export const Modal = ({ children }: ModalProps) => {
	const modalRoot = document.getElementById('modal-root')

	if (!modalRoot) {
		return null
	}

	return createPortal(children, modalRoot)
}
