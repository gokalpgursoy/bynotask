import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/:page',
    name: 'Home',
    component: Home,
    // component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  { path: '*', redirect: '/1' },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
});

export default router
