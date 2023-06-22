import tooltipDirective from './Tooltip/index'
import clickScrollDirective from './click-scroll'
import stickyDirective from './sticky'
import scrollDirective from './scroll'
import resizeDirective from './resize'
import rippleDirective from './ripple'
import clickOutsideDirective from './click-outside'

const directives = (app) => {
  tooltipDirective(app)
  clickScrollDirective(app)
  stickyDirective(app)
  scrollDirective(app)
  resizeDirective(app)
  rippleDirective(app)
  clickOutsideDirective(app)
}

export default directives
