import filter from './filter.json'
import notFound from './not-found.json'

export const en = {
	filter: filter,
	filtersButton: 'Filters',
	filtersModal: {
		heading: 'Filters',
		buttons: {
			apply: 'Apply filters',
			close: {
				ariaLabel: 'Close modal'
			}
		}
	},
	applyFiltersConfirmationModal: {
		heading: 'Do you want to apply new filters?',
		buttons: {
			applyNew: 'Apply new filters',
			useOld: 'Use old filters',
			close: {
				ariaLabel: 'Close modal'
			}
		}
	},
	'not-found': notFound
} as const
