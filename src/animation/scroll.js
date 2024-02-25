const sections = document.querySelectorAll('.hide')

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('show')
    } else {
      entry.target.classList.remove('show')
    }
  })
})

sections.forEach(section => observer.observe(section) )

export default observer