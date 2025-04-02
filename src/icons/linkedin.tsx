import { FaLinkedin } from 'react-icons/fa'

export function LinkedIn() {
	return (
		<a
			href="https://www.linkedin.com/in/gabrielvieira02/"
			target="_blank"
			rel="noopener noreferrer"
			className="cursor-pointer hover:brightness-120 transition-all"
		>
			<FaLinkedin size={28} color="#0a66c2" />
		</a>
	)
}
