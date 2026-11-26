import { ChangeEvent } from 'react'
import { useTranslation } from 'react-i18next'

import { XMarkIcon } from '@heroicons/react/24/outline'
import { FilterItem } from '@shared/api/types/Filter'

import { Button } from './Button'
import { Modal } from './Modal'

export type FiltersConfig = {
	filterItems: FilterItem[]
}

type FiltersModalProps = {
	filters: Record<string, boolean>
	filtersConfig: FiltersConfig
	isOpen: boolean
	onApply(): void
	onChange(
		e: ChangeEvent<HTMLInputElement, HTMLInputElement>,
		filterName: string
	): void
	onClose(): void
}

export const FiltersModal = ({
	filters,
	filtersConfig,
	isOpen,
	onApply,
	onChange,
	onClose
}: FiltersModalProps) => {
	const { t } = useTranslation()

	if (!isOpen) {
		return null
	}

	return (
		<Modal>
			<div className="fixed inset-0 z-1000 flex items-center justify-center overflow-y-auto bg-black/50 p-4">
				<div className="w-full max-w-7xl max-h-full overflow-y-auto rounded-xl bg-white p-6 shadow-xl">
					<div className="flex justify-center relative">
						<h1 className="text-[40px] font-medium leading-none">
							{t('filtersModal.heading')}
						</h1>
						<div className="absolute right-0 flex items-center h-full">
							<Button
								aria-label={t('filtersModal.buttons.close.ariaLabel')}
								className="w-5 h-5 p-0 border-none rounded-none"
								onClick={onClose}
								variant="secondary"
							>
								<XMarkIcon />
							</Button>
						</div>
					</div>
					<hr className="my-8" />
					{filtersConfig.filterItems.map(item => {
						return (
							<div key={item.id}>
								<h2 className="text-2xl font-medium leading-none mb-6">
									{item.name}
								</h2>
								<div className="grid grid-cols-3">
									{item.options.map(option => {
										return (
											<div
												className="flex items-center gap-4 mb-4"
												key={option.id}
											>
												<input
													id={option.id}
													type="checkbox"
													value={String(filters[option.name])}
													onChange={e => onChange(e, option.name)}
												/>
												<label htmlFor={option.id}>{option.name}</label>
											</div>
										)
									})}
								</div>
								<hr className="my-8" />
							</div>
						)
					})}
					<div className="flex justify-center">
						<Button
							onClick={onApply}
							variant="primary"
						>
							{t('filtersModal.buttons.apply')}
						</Button>
					</div>
				</div>
			</div>
		</Modal>
	)
}
