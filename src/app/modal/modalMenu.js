const modal = document.querySelector('#modalMenu')

export default document.querySelector('#buttonMenu').addEventListener('click', () => {
  modal.showModal()
})

document.querySelector('.buttonClose').addEventListener('click', () => {
  modal.close()
})
