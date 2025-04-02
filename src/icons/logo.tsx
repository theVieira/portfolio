import { kalam } from '@/fonts/kalam'

export function Logo() {
	return (
		<h1
			className={
				(kalam.className,
				'font-bold text-2xl bg-gradient-to-r from-purple-500 to-orange-600 bg-clip-text text-transparent')
			}
		>
			GabrielGuimarães
		</h1>
	)
}
