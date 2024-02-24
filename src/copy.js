const elements = document.querySelectorAll('.copy')

elements.forEach(el => {
  el.addEventListener('click', copy)
})

export default function copy(ev) {
  const text = ev.target.innerText
  navigator.clipboard.writeText(text)
  ev.target.innerText = 'Copied to clipboard'
  setInterval(() => {
    ev.target.innerText = text
  }, 1000)
}