export default {
    namespaced: true,
    state: {
        userInfo: {
            id: '',
            name: '未知',
            age: 0,
        }
    },
    actions: {
        getUserInfo (context, id) {
            console.log('actions中getUserInfo方法被调用了',context, id)
            if (id) {
                context.state.userInfo.id = id
                context.state.userInfo.name = 'Tracy'
            }
        }
    },
    mutations: {
        addAge(state, value) {
            console.log('mutations中addAge方法被调用了',state,value)
            state.userInfo.age  += value
        }
    },
    getters: {
        computeUser (state) {
            console.log('getters中computeUser方法被调用了', state)
            return state.userInfo.id + '-' + state.userInfo.name + '-' + state.userInfo.age
        }
    }
}