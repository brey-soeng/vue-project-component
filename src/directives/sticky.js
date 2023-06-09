const stickyDirective = (app) => {
  app.directive('sticky', {
    mounted(el, binding) {
      init(el, binding)
    },
    updated(el, binding) {
      init(el, binding)
    }
  })
}

function init(el, binding) {
  const params = binding.value || {}
  const stickyTop = params.stickyTop || 0
  const zIndex = params.zIndex || 1000
  const elStyle = el.style
  elStyle.position = '-webkit-sticky'
  elStyle.position = 'sticky'
  const elHeight = el.getBoundingClientRect().height

  const elWidth = el.getBoundingClientRect().width
  //   elStyle.cssText = `top: ${stickyTop}px; z-index: ${zIndex}`
  const parentElm = el.parentNode || document.documentElement
  const placeholder = document.createElement('div')
  placeholder.style.display = 'none'
  placeholder.style.width = `${elWidth}px`
  placeholder.style.height = `${elHeight}px`
  parentElm.insertBefore(placeholder, el)

  let active = false

  const getScroll = (target, top) => {
    const prop = top ? 'pageYOffset' : 'pageXOffset'
    const method = top ? 'scrollTop' : 'scrollLeft'
    let ret = target[method]
    // let ret = target[prop]
    if (typeof ret !== 'number') {
      ret = window.document.documentElement[prop]
      // ret = window.document.documentElement[method]
    }
    return ret
  }

  const sticky = () => {
    if (active) {
      return
    }
    if (!elStyle.height) {
      elStyle.height = `${el.offsetHeight}px`
    }

    elStyle.position = 'fixed'
    elStyle.width = `${elWidth}px`
    placeholder.style.display = 'inline-block'
    active = true
  }

  const reset = () => {
    if (!active) {
      return
    }

    elStyle.position = ''
    placeholder.style.display = 'none'
    active = false
  }

  const scroller = window.document.getElementById('elementId')

  const check = () => {
    const scrollTop = getScroll(scroller, true)
    //const scrollTop = getScroll(window, true)
    const offsetTop = el.getBoundingClientRect().top
    if (offsetTop < stickyTop) {
      elStyle.cssText = `top: ${stickyTop}px; z-index: ${zIndex}`
      sticky()
    } else {
      if (scrollTop < elHeight + stickyTop) {
        reset()
        elStyle.cssText = `top: ${scrollTop}px; z-index: ${zIndex}`
      }
    }
  }

  const listenAction = () => {
    check()
  }

  // window.addEventListener('scroll', listenAction)
  scroller.addEventListener('scroll', listenAction)
}

// unbind() {
//   window.removeEventListener('scroll', listenAction)
// }

export default stickyDirective
