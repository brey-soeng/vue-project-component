import tooltipDirective from './tooltip'
import clickScrollDirective from './click-scroll'
import stickyDirective from './sticky'
import scrollDirective from './scroll'
import resizeDirective from './resize'

const directives = (app) => {
  tooltipDirective(app)
  clickScrollDirective(app)
  stickyDirective(app)
  scrollDirective(app)
  resizeDirective(app)
}

export default directives
