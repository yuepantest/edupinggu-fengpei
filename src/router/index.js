import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: 'start'
  },
  {
    path: '/start',
    name: 'start',
    component: () => import(/* webpackChunkName: "start" */ '../views/Start.vue'),
  },
  {
    path: '/FormOne',
    name: 'FormOne',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/FormOne.vue')
  },
  {
    path: '/FormOneFPD',
    name: 'FormOneFPD',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/FormOneFPD.vue')
  },
  {
    path: '/FormOneGXD',
    name: 'FormOneGXD',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/FormOneGXD.vue')
  },
  {
    path: '/FormOneJYD',
    name: 'FormOneJYD',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/FormOneJYD.vue')
  },
  {
    path: '/FormTwoFPD',
    name: 'FormTwoFPD',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/FormTwoFPD.vue')
  },
  {
    path: '/FormTwoGXD',
    name: 'FormTwoGXD',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/FormTwoGXD.vue')
  },
  {
    path: '/FormTwoJYD',
    name: 'FormTwoJYD',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/FormTwoJYD.vue')
  },
  {
    path: '/FormTwo',
    name: 'FormTwo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/FormTwo.vue')
  },
  {
    path: '/FinishFailure',
    name: 'FinishFailure',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/FinishFailure.vue')
  },
  {
    path: '/FinishFPD',
    name: 'FinishFPD',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/FinishFPD.vue')
  },
  {
    path: '/FinishGXD',
    name: 'FinishGXD',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/FinishGXD.vue')
  },
  {
    path: '/FinishJYD',
    name: 'FinishJYD',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/FinishJYD.vue')
  },
  {
    path: '/FormThree',
    name: 'FormThree',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/FormThree.vue')
  },
  {
    path: '/FormThreeCopy',
    name: 'FormThreeCopy',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/FormThreeCopy.vue')
  },
  {
    path: '/FormFour',
    name: 'FormFour',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/FormFour.vue')
  },
  {
    path: '/FinishJYDLater',
    name: 'FinishJYDLater',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/FinishJYDLater.vue')
  },
]

const router = createRouter({
  history: createWebHistory("/#"),
  routes
})

export default router
