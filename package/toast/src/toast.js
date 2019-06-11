import toast from './toast.vue';
import Vue from 'vue';
let ToastConstructor = Vue.extend(toast);
let instance;
let instances = [];
const Toast =  function(options) {
  options = options || {};
  if(typeof options === 'string') {
    options = {
      msg: options
    }
  }
  instance = new ToastConstructor({
    data: options
  })
  instance.$mount();
  document.body.appendChild(instance.$el);
  instance.visible = true;
  instances.push(instance);
  setTimeout(() => {
    // if()
    // console.log(instance.$el)
      document.body.removeChild(instance.$el);
  }, 3000)
  return instance;
};
['top', 'bottom'].forEach(item => {
  Toast[item] = options => {
    if (typeof options === 'string') {
      options = {
        msg: options
      };
    }
    options.position = item;
    return Toast(options);
  };
})
export default Toast;