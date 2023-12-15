export default document.querySelector('#powerButton').addEventListener('click', () => {
  const body = document.querySelector('body')
  const lamp = document.querySelector('#lamp')
  const header = document.querySelector('header')
  const main = document.querySelector('main')
  const socialMedias = document.querySelector('.socialMediaIcons')

  body.classList.toggle('lightOn')
  lamp.getAttribute('src') == '/public/assets/lampOff.svg' ? lamp.setAttribute('src', '/public/assets/lampOn.svg') : lamp.setAttribute('src', '/public/assets/lampOff.svg')
  lamp.style.opacity == 0.35 ? lamp.style.opacity = 1 : lamp.style.opacity = 0.35
  header.classList.toggle('opacity')
  main.classList.toggle('opacity')
  socialMedias.classList.toggle('opacity')
})