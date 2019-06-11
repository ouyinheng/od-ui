import Button from './button';
import Toast from './toast';
import './theme/index.scss';
const components = [
  Button
]

const install = function (Vue) {
  // if (install.installed) return
  components.forEach(component => {
    Vue.component(component.name, component)
  })
  Vue.prototype.$toast = Toast;
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  Button,
  Toast
}