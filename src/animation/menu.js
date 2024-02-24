const open = document.querySelector('#open')
const close = document.querySelector('#close')
const links = document.querySelectorAll('.dialog .container a')
const dialog = document.querySelector('.dialog')

export const show = open.addEventListener('click', showModal)
export const hide = close.addEventListener('click', hideModal)
export const link = links.forEach(element => {
  element.addEventListener('click', hideModal)
});

function showModal() {
  dialog.classList = 'dialog'
}

function hideModal() {
  dialog.classList = 'dialog hidden'
} 