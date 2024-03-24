import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Index from '../views/Index.vue'
// import User from '../views/user/User.vue'
// import Menu from '../views/menu/Menu.vue'
// import Role from '../views/role/Role.vue'
import axios from "axios"
import store from '../store'

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
        component: () => import('../views/setting/PersonCenter.vue'),
      },
      {
        path: '/index',
        name: 'Index',
        component: Index
      },
      // {
      //   path: '/user',
      //   name: 'User',
      //   component: User,
      // },
      // {
      //   path: '/role',
      //   name: 'Role',
      //   component: Role,
      // },
      // {
      //   path: '/menu',
      //   name: 'Menu',
      //   component: Menu,
      // }

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

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  console.log(store.state.menus.hasRoute)
  if (!store.state.menus.hasRoute) {
    axios.get('/menu/nav', {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    }).then(res => {
      let resData = res.data.data
      // 获取菜单
      store.commit('SET_MENUS', resData.nav)
      // 获取权限
      store.commit('SET_AUTHORITY', resData.authority)


      // let newRoutes = router.options.routes
      resData.nav.forEach(menu => {
        if (menu.children) {
          menu.children.forEach(e => {
            // 转成路由
            let route = menuToRoute(e)
            // 把路由添加到路管理器中
            if (route) {
              let homeRoutes = router.options.routes.find(item => item.path === '/home')
              let hasRoute = false
              homeRoutes.children.forEach(e => {
                hasRoute = (e.path === route.path)
              })
              if (!hasRoute) {
                router.addRoute('Home', route)
                // console.log(router.options)
                // console.log('添加路由', route.name)
              }
            }
          })
        }
      })
      store.commit('UPDATE_HAS_ROUTE_STATUS', true)
      // router.addRoutes(newRoutes)
    })
  }
  next()
})

const menuToRoute = (menu) => {
  return {
    name: menu.name,
    path: menu.path,
    component: () => import('../views' + menu.component),
    meta: {
      icon: menu.icon,
      title: menu.title
    }
  }
}
export default router
