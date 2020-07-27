/*
 * @Author: Vimalakirti
 * @Date: 2020-07-13 13:06:39
 * @LastEditTime: 2020-07-27 21:42:12
 * @Description: 
 * @FilePath: \bilibili\bilibili\src\router\index.js
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Register from "../views/register.vue";

Vue.use(VueRouter);

const routes = [{
    path: '/',
    name: 'home',
    component: () => import( /* webpackChunkName: "about" */ "../views/Home.vue")
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: () => import( /* webpackChunkName: "about" */ "../views/Login.vue")
  },
  {
    path: '/edit',
    name: 'edit',
    meta: {
      istoken: true //需要token
    },
    component: () => import( /* webpackChunkName: "about" */ "../views/Edit.vue")
  },
  {
    path: '/userinfo',
    name: 'userinfo',
    meta: {
      istoken: true //需要token
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
  if (!localStorage.getItem('token') && !localStorage.getItem('id') && to.meta.istoken == true) {
    router.push('/login')
    Vue.prototype.$msg.fail('请重新登录')
    return
  } else {
    next()
  }
})

export default router;