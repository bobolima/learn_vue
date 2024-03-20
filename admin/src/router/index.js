import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Index from '../views/Index.vue'
import User from '../views/user/User.vue'
import Menu from '../views/menu/Menu.vue'
import Role from '../views/role/Role.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/index',
    name: 'Index',
    component: Index,
    children: [
      {
        path: '/home',
        name: 'Home',
        component: Home
      },
      {
        path: '/user',
        name: 'User',
        component: User,
      },
      {
        path: '/role',
        name: 'Role',
        component: Role,
      },
      {
        path: '/menu',
        name: 'Menu',
        component: Menu,
      }
    ]
  },
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
