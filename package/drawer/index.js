/*
 * @Author: your name
 * @Date: 2020-05-15 14:11:53
 * @LastEditTime: 2020-05-15 14:31:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \1.Webe:\github\od-ui\package\drawer\index.js
 */ 
import Drawer from './src/drawer.vue'
Drawer.install = function (Vue) {
  Vue.component(Drawer.name, Drawer)
}
export default Drawer