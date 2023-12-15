const modal = document.querySelector('#modalContact')

export default document.querySelector('#buttonContactMe').addEventListener('click', () => {
  modal.showModal()
})

document.querySelector('#modalMenu #buttonContactMeMenu').addEventListener('click', () => {
  modal.showModal()
})

document.querySelector('#modalContact .buttonClose').addEventListener('click', () => {
  modal.close()
})
