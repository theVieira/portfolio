const modal = document.querySelector('#modalAbout')

export default document.querySelector('#buttonAbout').addEventListener('click', () => {
  modal.showModal()
})

document.querySelector('#buttonAboutMeMenu').addEventListener('click', () => {
  modal.showModal()
})

document.querySelector('#modalAbout .buttonClose').addEventListener('click', () => {
  modal.close()
})