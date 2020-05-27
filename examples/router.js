/*
 * @Author: your name
 * @Date: 2020-05-12 14:41:08
 * @LastEditTime: 2020-05-15 14:29:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \1.Webe:\github\od-ui\examples\router.js
 */

import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import navConf from "./nav.config.json";
Vue.use(Router);
let routes = [];

Object.keys(navConf).forEach((header) => {
  routes = routes.concat(navConf[header]);
});

let addComponent = (router) => {
  router.forEach((route) => {
    if (route.items) {
      addComponent(route.items);
      routes = routes.concat(route.items);
    } else {
      if (route.type === "views") {
        route.component = (r) =>
          require.ensure([], () => r(require(`./views/${route.name}.vue`)));
        return;
      }
      route.component = (r) =>
        require.ensure([], () => r(require(`./docs/${route.name}.md`)));
    }
  });
};
addComponent(routes);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      children: routes,
    },
    {
      path: "/show",
      name: "show",
      component: () =>
        import(/* webpackChunkName: "show" */ "./views/show.vue"),
      children: [
        {
          path: "/show/icon",
          name: "icon",
          component: () =>
            import(/* webpackChunkName: "show" */ "./views/components/icon.vue"),
        },
        {
          path: "/show/button",
          name: "button",
          component: () =>
            import(/* webpackChunkName: "show" */ "./views/components/button.vue"),
        },
        {
          path: "/show/transition",
          name: "transition",
          component: () =>
            import(/* webpackChunkName: "show" */ "./views/components/transition.vue"),
        },
        {
          path: "/show/toast",
          name: "toast",
          component: () =>
            import(/* webpackChunkName: "show" */ "./views/components/toast.vue"),
        },
        {
          path: "/show/drawer",
          name: "drawer",
          component: () =>
            import(/* webpackChunkName: "show" */ "./views/components/drawer.vue"),
        },
        {
          path: "/show/popup",
          name: "popup",
          component: () =>
            import(/* webpackChunkName: "show" */ "./views/components/popup.vue"),
        }, {
			path: "/show/svger",
			name: "svger",
			component: () =>
			  import(/* webpackChunkName: "show" */ "./views/components/svger.vue"),
		},
      ],
    },
  ],
});
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
