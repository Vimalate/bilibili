/*
 * @Author: Vimalakirti
 * @Date: 2020-07-13 13:06:39
 * @LastEditTime: 2020-07-24 22:43:49
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
    meta: {
      istoken: true
    },
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/userinfo.vue")
  }
];


const router = new VueRouter({
  routes,
  mode: 'history'
});

router.beforeEach((to, from, next) => {
  if (!localStorage.getItem('token') && !localStorage.getItem('id') && !to.meta.istoken == true) {
    router.push({
      name: 'login'
    })
    return
  } else {
    next()
  }

})


export default router;