import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue';
import navConf from './nav.config.json';
Vue.use(Router)
let routes = []

Object.keys(navConf).forEach((header) => {
  routes = routes.concat(navConf[header])
})

let addComponent = (router) => {
  router.forEach((route) => {
    if (route.items) {
      addComponent(route.items)
      routes = routes.concat(route.items)
    } else {
      if (route.type === 'views') {
        route.component = r => require.ensure([], () =>
          r(require(`./views/${route.name}.vue`)))
        return
      }
      route.component = r => require.ensure([], () =>
        r(require(`./docs/${route.name}.md`)))
    }
  })
}
addComponent(routes)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: Home,
    children: routes
  }, {
    path: '/show',
    name: 'show',
    component: () => import( /* webpackChunkName: "show" */ './views/show.vue'),
    children: [{
      path: '/show/button',
      name: 'button',
      component: () => import( /* webpackChunkName: "show" */ './views/components/button.vue'),
    }]
  }]
})
// export default new Router({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: Home,
//       redirect: '/button',
//       children: [{
//         path: '/button',
//         name: 'button',
//         component: r => require.ensure([], () => r(require('./docs/button.md')))
//       }, {
//         path: '/giud',
//         name: 'giud',
//         component: r => require.ensure([], () => r(require('./docs/giud.md')))
//       }]
//     },{
//       path: '/show',
//       name: 'show',
//       component: () => import(/* webpackChunkName: "show" */ './views/show.vue'),
//       children: [{
//         path: '/show/button',
//         name: 'button',
//         component: r => require.ensure([], () => r(require('./docs/button.md')))
//       }]
//     }
//   ]
// })