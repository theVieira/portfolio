const infoAboutTech = document.querySelector('#infoAboutTech')

export default function screen() {
    document.querySelectorAll('.techImages img').forEach((element) => {
        element.addEventListener('click', () => {
                switch(element.id) {
                    case 'html':
                        infoAboutTech.innerText = 'HTML é uma linguagem de marcação utilizada na construção de páginas na Web'
                        break
                    case 'css':
                        infoAboutTech.innerText = 'Cascading Style Sheets é um mecanismo para adicionar estilos a uma página web'
                        break
                    case 'sass':
                        infoAboutTech.innerText = 'O SASS é uma linguagem de extensão do CSS, a sigla significa “Syntactically Awesome Style Sheets” traduzindo ao pé da letra, folhas de estilo com uma sintaxe incrível'
                        break
                    case 'javascript':
                        infoAboutTech.innerText = 'JavaScript é uma linguagem de programação que permite a você implementar itens complexos em páginas web'
                        break
                    case 'nodejs':
                        infoAboutTech.innerText = 'Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web'
                        break
                    case 'vue':
                        infoAboutTech.innerText = 'Vue.js é um framework JavaScript de código-aberto, focado no desenvolvimento de interfaces de usuário e aplicativos de página única'
                        break
                    case 'postgres':
                        infoAboutTech.innerText = 'PostgreSQL é um sistema gerenciador de banco de dados objeto relacional, desenvolvido como projeto de código aberto'
                        break
                }       
            })
        })

        document.querySelector('#modalAbout .buttonClose').addEventListener('click', () => {
            infoAboutTech.innerText = 'Clique na figura e veja mais informações sobre a tecnologia'
        })
}

