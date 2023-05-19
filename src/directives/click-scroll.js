const clickScrollDirective = (app) => {
  app.directive('click', {
    mounted(el, binding) {
      init(el, binding)
    },
    updated(el, binding) {
      init(el, binding)
    }
  })
}

function init(el, binding) {
  el.style.cursor = 'pointer'
  el.addEventListener('click', () => {
    let coord = 0
    coord = binding.value
      ? el.getBoundingClientRect().top + window.scrollY - binding.value
      : el.getBoundingClientRect().top + window.scrollY
    window.scroll({ top: coord, behavior: 'smooth' })
  })
}

export default clickScrollDirective
