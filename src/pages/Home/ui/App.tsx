import { ChangeEvent, useState } from 'react'
import { useTranslation } from 'react-i18next'

import '@shared/i18n/i18n'
import filtersData from '@shared/temp/filterData.json'

import { ApplyFiltersConfirmationModal } from './ApplyFiltersConfirmationModal'
import { Button } from './Button'
import { FiltersConfig, FiltersModal } from './FiltersModal'

// 1. TODO handle Esc
// 2. TODO add specs

type Modal = 'filters' | 'confirmation'

export const App = () => {
	const { t } = useTranslation()
	const [openModals, setOpenModals] = useState<Record<Modal, boolean>>({
		filters: false,
		confirmation: false
	})
	const [filters, setFilters] = useState<Record<string, boolean>>({})

	const openModal = (modal: Modal) => {
		setOpenModals(prevState => {
			return {
				...prevState,
				[modal]: true
			}
		})
	}
	const closeModal = (modal: Modal) => {
		setOpenModals(prevState => {
			return {
				...prevState,
				[modal]: false
			}
		})
	}
	const applyFilters = () => {
		closeModal('filters')
		closeModal('confirmation')
		alert(`Applied filters: ${JSON.stringify(filters)}`)
	}
	const updateFilters = (
		event: ChangeEvent<HTMLInputElement, HTMLInputElement>,
		filterName: string
	) => {
		setFilters(prevState => {
			return {
				...prevState,
				[filterName]: event.target.checked
			}
		})
	}

	return (
		<section className="w-full min-h-dvh flex items-center justify-center">
			<div>
				<div>
					<Button
						type="button"
						onClick={() => openModal('filters')}
						variant="primary"
					>
						{t('filtersButton')}
					</Button>
				</div>
				<FiltersModal
					filters={filters}
					filtersConfig={filtersData as FiltersConfig}
					isOpen={openModals.filters}
					onApply={() => openModal('confirmation')}
					onChange={updateFilters}
					onClose={() => closeModal('filters')}
				/>
				<ApplyFiltersConfirmationModal
					isOpen={openModals.confirmation}
					onApply={applyFilters}
					onClose={() => {
						closeModal('confirmation')
					}}
					onUseOldFilters={() => {
						closeModal('filters')
						closeModal('confirmation')
					}}
				/>
			</div>
		</section>
	)
}
