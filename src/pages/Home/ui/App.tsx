import { ChangeEvent, useState } from 'react'

import filtersData from '../../../shared/temp/filterData.json'

export const App = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [filters, setFilters] = useState<Record<string, boolean>>({})
	const openModal = () => {
		setIsModalOpen(true)
	}
	const closeModal = () => {
		setIsModalOpen(false)
	}
	const applyFilters = () => {
		alert(`Applied filters: ${JSON.stringify(filters)}`)
	}
	const getUpdateFilters =
		(filterName: string) =>
		(event: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
			setFilters(prevState => {
				return {
					...prevState,
					[filterName]: event.target.checked
				}
			})
		}

	return (
		<section className="w-full h-dvh flex items-center justify-center">
			{/* eslint-disable-next-line i18next/no-literal-string */}
			<div>
				<div>
					<button onClick={openModal}>Filters</button>
				</div>
				{isModalOpen && (
					<div style={{ border: '1px solid black' }}>
						<h1>Filter</h1>
						<hr />
						{filtersData.filterItems.map(item => {
							return (
								<div key={item.id}>
									<h2>{item.name}</h2>
									<div>
										{item.options.map(option => {
											return (
												<div key={option.id}>
													<input
														type="checkbox"
														value={String(filters[option.name])}
														onChange={getUpdateFilters(option.name)}
													/>
													{option.name}
												</div>
											)
										})}
									</div>
								</div>
							)
						})}
						<button onClick={applyFilters}>Apply</button>
						<button onClick={closeModal}>Cancel</button>
					</div>
				)}
			</div>
		</section>
	)
}
