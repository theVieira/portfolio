const information = document.querySelector('#information')
const techs = document.querySelectorAll('.techs .icon')

export default techs.forEach(tech => {
  const techId = tech.id
  tech.addEventListener('click', () => {
    switch(techId) {
      case 'html':
        render('HTML é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores')
      break
      case 'css':
        render('Cascading Style Sheets é um mecanismo para adicionar estilos a uma página web')
      break
      case 'javascript':
        render('JavaScript é uma linguagem de programação interpretada estruturada. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web')
      break
      case 'vuejs': 
        render('Vue.js é um framework JavaScript de código-aberto, focado no desenvolvimento de interfaces de usuário e aplicativos de página única')
      break
      case 'nodejs':
        render('Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web')
      break
      case 'postgresql': 
        render('PostgreSQL é um sistema gerenciador de banco de dados objeto relacional, desenvolvido como projeto de código aberto')
      break
      case 'mongodb': 
        render('MongoDB é um software de banco de dados orientado a documentos livre, de código aberto e multiplataforma')
      break
      case 'typescript': 
        render('TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem')
      break
      case 'docker': 
        render('Docker é um conjunto de produtos de plataforma como serviço que usam virtualização de nível de sistema operacional para entregar software em pacotes chamados contêineres')
      break
      case 'git':
        render('Git é um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software, mas pode ser usado para registrar o histórico de edições de qualquer tipo de arquivo')
      break
      case 'bootstrap':
        render('Bootstrap é um framework web com código-fonte aberto para desenvolvimento de componentes de interface, melhorando a experiência do usuário em um site amigável e responsivo')
      break
      case 'ejs':
        render('O EJS é uma Template Engine que podemos utilizar com Node.js, com a template engine nós podemos criar as páginas das nossas aplicações em Node.js de forma dinâmica sem depender das limitações do HTML')
    }
  })
})

const observer = new IntersectionObserver(entry => {
  if(!entry.isIntersecting) {
    information.textContent = ''
  }
})

observer.observe(information)

function render(tech) {
  information.textContent = tech
}