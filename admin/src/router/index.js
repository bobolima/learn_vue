import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Index from '../views/Index.vue'
import store from "@/store"

Vue.use(VueRouter)

const routes = [

  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/personCenter',
        name: 'PersonCenter',
        meta: {
          title: '个人中心'
        },
        component: () => import('../views/setting/PersonCenter.vue'),
      },
      {
        path: '/index',
        name: 'Index',
        meta: {
          title: '首页'
        },
        component: Index
      },
    ]
  },
  {
    path: '/',
    component: () => import('../views/Login.vue'),
    children: [
      {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Login.vue')
      },
    ]
  }
]
// 解决router.push()到当前路由报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

let isFirstNavigation = true;
router.beforeEach((to, from, next) => {
  if (isFirstNavigation) {
    isFirstNavigation = false;
    if (!from.name) {
      store.dispatch("getMenusForApi", true)
    } else if (!to.name) {
      store.dispatch("getMenusForApi", false)
    }
  }
  next();
})



export default router
