import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import router from '@/router/index'

Vue.use(Vuex)

export default ({
    state: {
        nav: [],
        authority: []
    },
    getters: {
    },
    mutations: {
        SET_MENUS(state, nav) {
            state.nav = nav
        },
        SET_AUTHORITY(state, authority) {
            state.authority = authority
        },
    },
    actions: {
        getMenusForApi(context, hasAddRoute) {
            let routeDate = []
            axios.get('/menu/nav', {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            }).then(res =>{
                const resData = res.data.data;
                routeDate = resData.nav;
                // 获取菜单
                context.commit('SET_MENUS', resData.nav);
                // 获取权限
                context.commit('SET_AUTHORITY', resData.authority);
                const oldRoutes = router.options.routes[0].children
                oldRoutes.push(routeDate)
                if (hasAddRoute) {
                    routeDate.forEach(menu => {
                        if (menu.children && menu.children.length > 0) {
                            menu.children.forEach(child => {
                                // 使用addRoute方法添加路由
                                router.addRoute('Home', {
                                    path: child.path,
                                    name: child.name,
                                    component: () => import(`@/${child.component}`),
                                    meta: {
                                        icon: child.icon,
                                        title: child.title
                                    }
                                });
                            });
                        } else {
                            // 如果菜单没有子菜单，直接添加菜单项
                            router.addRoute(menu.name, {
                                path: menu.path,
                                name: menu.name,
                                component: () => import(`@/${menu.component}`),
                                meta: {
                                    icon: menu.icon,
                                    title: menu.title
                                }
                            });
                        }
                    });
                }

            }, error => {
                this.$message.error(error)
            });
        }
    },
    modules: {
    }
})
