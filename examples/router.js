import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue';
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: '/button',
      children: [{
        path: '/button',
        name: 'button',
        component: r => require.ensure([], () => r(require('./docs/button.md')))
      }, {
        path: '/giud',
        name: 'giud',
        component: r => require.ensure([], () => r(require('./docs/giud.md')))
      }]
    },{
      path: '/show',
      name: 'show',
      component: () => import(/* webpackChunkName: "show" */ './views/show.vue'),
      children: [{
        path: '/show/button',
        name: 'button',
        component: r => require.ensure([], () => r(require('./docs/button.md')))
      }]
    }
  ]
})
