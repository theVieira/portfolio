import { Logo } from '@/icons/logo'

interface INavigationBarItem {
	title: string
	url: string
}

const NavigationBarItems: INavigationBarItem[] = [
	{ title: 'Home', url: '#home' },
	{ title: 'Sobre', url: '#about' },
	{ title: 'Projetos', url: '#projects' },
	{ title: 'Contato', url: '#contact' },
]

export function NavigationBar() {
	return (
		<header className="w-full px-6 py-2 absolute top-0 left-0 flex justify-between items-center">
			<Logo />
			<nav>
				<ul className="flex gap-2">
					{NavigationBarItems.map(({ title, url }, i) => (
						<li
							key={i}
							className="hover:brightness-120 transition-all cursor-pointer font-semibold"
						>
							<a href={url}>{title}</a>
						</li>
					))}
				</ul>
			</nav>
		</header>
	)
}
