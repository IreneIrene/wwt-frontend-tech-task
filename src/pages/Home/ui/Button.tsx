import { ButtonHTMLAttributes } from 'react'

import { twMerge } from 'tailwind-merge'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	variant: 'primary' | 'secondary'
}

export const Button = ({
	children,
	className,
	variant,
	...otherProps
}: ButtonProps) => {
	const stylesMap = {
		primary: 'bg-orange text-white',
		secondary: 'border-black border-2'
	}
	const classNames = twMerge(
		'w-46 px-2 py-4 rounded-2xl cursor-pointer', // base styles
		variant ? [stylesMap[variant]] : '',
		className
	)

	return (
		<button
			className={classNames}
			{...otherProps}
		>
			{children}
		</button>
	)
}
