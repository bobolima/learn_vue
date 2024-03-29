import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/pages/Home.vue'
import About from '../components/pages/About.vue'
Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            name: 'Home',
            path: '/home',
            component: Home,
            // children: [
                // {
                //     // 当 /user/:id/profile 匹配成功，
                //     // UserProfile 会被渲染在 User 的 <router-view> 中
                //     path: 'profile',
                //     component: UserProfile
                // },
                // {
                //     // 当 /user/:id/posts 匹配成功
                //     // UserPosts 会被渲染在 User 的 <router-view> 中
                //     path: 'posts',
                //     component: UserPosts
                // }
            // ]
        },
        {
            name: 'About',
            path: '/about',
            component: About
        }
    ]
})

export default router
