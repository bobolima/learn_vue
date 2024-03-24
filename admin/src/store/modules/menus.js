import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default ({
    state: {
        nav: [],
        authority: [],
        hasRoute: false
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
        UPDATE_HAS_ROUTE_STATUS(state, hasRoute) {
            state.hasRoute = hasRoute
        }
    },
    actions: {
    },
    modules: {
    }
})
