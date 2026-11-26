import { useTranslation } from 'react-i18next'

import { XMarkIcon } from '@heroicons/react/24/outline'

import { Button } from './Button'
import { Modal } from './Modal'

type ConfirmationModalProps = {
	isOpen: boolean
	onApply(): void
	onClose(): void
	onUseOldFilters(): void
}

export const ApplyFiltersConfirmationModal = ({
	isOpen,
	onApply,
	onClose,
	onUseOldFilters
}: ConfirmationModalProps) => {
	const { t } = useTranslation()

	if (!isOpen) {
		return null
	}

	return (
		<Modal>
			<div className="fixed inset-0 z-1100 flex items-center justify-center overflow-y-auto bg-black/50 backdrop-blur-sm p-4">
				<div className="w-full max-w-7xl max-h-full overflow-y-auto rounded-xl bg-white p-6 shadow-xl">
					<div className="flex justify-center relative mb-30">
						<h1 className="text-[40px] font-medium leading-none">
							{t('applyFiltersConfirmationModal.heading')}
						</h1>
						<div className="absolute right-0 flex items-center h-full">
							<Button
								aria-label={t(
									'applyFiltersConfirmationModal.buttons.close.ariaLabel'
								)}
								className="w-5 h-5 p-0 border-none rounded-none"
								onClick={onClose}
								variant="secondary"
							>
								<XMarkIcon />
							</Button>
						</div>
					</div>
					<div className="flex justify-center gap-8">
						<Button
							className="border-border-secondary"
							onClick={onUseOldFilters}
							variant="secondary"
						>
							{t('applyFiltersConfirmationModal.buttons.useOld')}
						</Button>
						<Button
							onClick={onApply}
							variant="primary"
						>
							{t('applyFiltersConfirmationModal.buttons.applyNew')}
						</Button>
					</div>
				</div>
			</div>
		</Modal>
	)
}
