const scrollDirective = (app) => {
  app.directive('scroll', {
    mounted(el, binding) {
      init(el, binding)
    },
    unmounted(el, binding) {
      unmountedDirective(el, binding)
    },
    updated(el, binding) {
      if (binding.value === binding.oldValue) return
      unmountedDirective(el, binding)
      init(el, binding)
    }
  })
}

function unmountedDirective(el, binding) {
  if (!el._onScroll?.[binding.instance.$.uid]) return
  const { handler, options, target = el } = el._onScroll[binding.instance.$.uid]
  target.removeEventListener('scroll', handler, options)
  delete el._onScroll[binding.instance.$.uid]
}
function init(el, binding) {
  const { self = false } = binding.modifiers ?? {}
  const value = binding.value
  const options = (typeof value === 'object' && value.options) || { passive: true }
  const handler = typeof value === 'function' || 'handleEvent' in value ? value : value.handler

  const target = self ? el : binding.arg ? document.querySelector(binding.arg) : window

  if (!target) return

  target.addEventListener('scroll', handler, options)

  el._onScroll = Object(el._onScroll)
  el._onScroll[binding.instance.$.uid] = {
    handler,
    options,
    target: self ? undefined : target
  }
}

export default scrollDirective
