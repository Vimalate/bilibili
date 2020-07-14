/*
 * @Author: Vimalakirti
 * @Date: 2020-07-13 13:06:39
 * @LastEditTime: 2020-07-14 21:48:20
 * @Description: 
 * @FilePath: \bilibili\bilibili\src\router\index.js
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Register from "../views/register.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/Login.vue")
  },
  {
    path: '/userinfo',
    name: 'userinfo',
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/userinfo.vue")
  }

  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  routes
});

export default router;