const information = document.querySelector('#information')
const techs = document.querySelectorAll('.techs .icon')

export default techs.forEach((tech) => {
	const techId = tech.id
	tech.addEventListener('click', () => {
		switch (techId) {
			case 'html':
				render(
					'HTML é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores'
				)
				break
			case 'css':
				render(
					'Cascading Style Sheets é um mecanismo para adicionar estilos a uma página web'
				)
				break
			case 'javascript':
				render(
					'JavaScript é uma linguagem de programação interpretada estruturada. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web'
				)
				break
			case 'vuejs':
				render(
					'Vue.js é um framework JavaScript de código-aberto, focado no desenvolvimento de interfaces de usuário e aplicativos de página única'
				)
				break
			case 'nodejs':
				render(
					'Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web'
				)
				break
			case 'postgresql':
				render(
					'PostgreSQL é um sistema gerenciador de banco de dados objeto relacional, desenvolvido como projeto de código aberto'
				)
				break
			case 'mongodb':
				render(
					'MongoDB é um software de banco de dados orientado a documentos livre, de código aberto e multiplataforma'
				)
				break
			case 'typescript':
				render(
					'TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem'
				)
				break
			case 'docker':
				render(
					'Docker é um conjunto de produtos de plataforma como serviço que usam virtualização de nível de sistema operacional para entregar software em pacotes chamados contêineres'
				)
				break
			case 'git':
				render(
					'Git é um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software, mas pode ser usado para registrar o histórico de edições de qualquer tipo de arquivo'
				)
				break
			case 'bootstrap':
				render(
					'Bootstrap é um framework web com código-fonte aberto para desenvolvimento de componentes de interface, melhorando a experiência do usuário em um site amigável e responsivo'
				)
				break
			case 'ejs':
				render(
					'O EJS é uma Template Engine que podemos utilizar com Node.js, com a template engine nós podemos criar as páginas das nossas aplicações em Node.js de forma dinâmica sem depender das limitações do HTML'
				)
				break
			case 'linux':
				render(
					'Linux é um sistema operacional de código aberto baseado no núcleo Linux, criado por Linus Torvalds em 1991. Uma das principais características do Linux é sua robustez e segurança, além de oferecer uma ampla gama de ferramentas e aplicações para desenvolvedores e usuários.'
				)
				break
			case 'aws':
				render(
					'AWS, ou Amazon Web Services, é uma plataforma de computação em nuvem da Amazon que oferece uma vasta gama de serviços, incluindo armazenamento, computação, bancos de dados, análise de dados, aprendizado de máquina, inteligência artificial, Internet das Coisas (IoT) e muito mais.'
				)
				break
			case 'cloudflare':
				render(
					'Cloudflare é uma empresa que fornece serviços de segurança e desempenho para websites e aplicações online. Fundada em 2009, sua plataforma inclui uma rede de entrega de conteúdo (CDN), proteção contra ataques DDoS, firewall de aplicativos web (WAF) e otimização de desempenho.'
				)
				break
			case 'tailwindcss':
				render(
					'Tailwind CSS é um framework de CSS utilitário que permite a construção de interfaces de usuário de forma rápida e flexível. Ao invés de utilizar classes CSS tradicionais, o Tailwind oferece uma ampla gama de classes utilitárias que podem ser combinadas diretamente nos elementos HTML. Isso permite um controle preciso sobre o design, tornando mais fácil aplicar estilos como espaçamento, cores, tipografia e layouts.'
				)
				break
			case 'jwt':
				render(
					'JWT, ou JSON Web Token, é um padrão aberto (RFC 7519) usado para transmitir informações de forma segura entre partes como um objeto JSON. Ele é comumente utilizado em sistemas de autenticação e autorização, são amplamente utilizados em APIs para autenticação, permitindo que o servidor valide a identidade do usuário sem precisar armazenar informações de sessão.'
				)
				break
			case 'nginx':
				render(
					'Nginx é um servidor web de código aberto que também atua como um proxy reverso, balanceador de carga e cache de conteúdo. Criado para lidar com um grande número de conexões simultâneas, ele é conhecido por sua alta performance, baixa utilização de recursos e facilidade de configuração. Além de servir conteúdo estático, como HTML e imagens, o Nginx pode gerenciar conexões dinâmicas e integrar-se facilmente com outros serviços, como servidores de aplicativos e bancos de dados. É amplamente utilizado em ambientes de produção devido à sua escalabilidade e robustez.'
				)
				break
		}
	})
})

const observer = new IntersectionObserver((entry) => {
	if (!entry.isIntersecting) {
		information.textContent = ''
	}
})

observer.observe(information)

function render(tech) {
	information.textContent = tech
}
