import { FaGithub } from 'react-icons/fa'

export function GitHub() {
	return (
		<a
			href="https://github.com/theVieira"
			target="_blank"
			rel="noopener noreferrer"
			className="cursor-pointer hover:brightness-120 transition-all"
		>
			<FaGithub size={28} color="#e9e9e9" />
		</a>
	)
}
