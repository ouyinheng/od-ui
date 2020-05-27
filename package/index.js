/*
 * @Author: your name
 * @Date: 2020-05-12 14:41:08
 * @LastEditTime: 2020-05-15 14:27:19
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \1.Webe:\github\od-ui\package\index.js
 */ 
import Button from './button';
import Toast from './toast';
import Drawer from './drawer';
import Svger from './svger';
import Popup from './popup';
import './theme/index.scss';
const components = [
  Button, Drawer, Svger, Popup
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
  Toast
}