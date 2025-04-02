import type { Metadata } from 'next'
import './globals.css'
import { NavigationBar } from '@/components/navigation-bar'
import { heebo } from '@/fonts/heebo'

export const metadata: Metadata = {
	title: 'Gabriel Guimarães | Desenvolvedor Web',
	description: 'Olá, sou Gabriel Guimarães, desenvolvedor web fullstack',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt_BR">
			<body className="dark">
				<NavigationBar />
				<main className={(heebo.className, 'w-full p-6')}>{children}</main>
			</body>
		</html>
	)
}
