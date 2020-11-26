/*
 * @Author: jacob
 * @Date: 2020-10-13 10:38:42
 * @LastEditTime: 2020-11-26 10:39:20
 * @LastEditors: jacob
 * @Description: 
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import assets from '../views/assets'
import use from '../views/use'
import line from '../views/line'
import group from '../views/group'
import point from '../views/point'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/assets',
    name: 'assets',
    component: assets
  },
  {
    path: '/use',
    name: 'use',
    component: use
  },
  {
    path: '/line',
    name: 'line',
    component: line
  },
  {
    path: '/group',
    name: 'group',
    component: group
  },
  {
    path: '/point',
    name: 'point',
    component: point
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
