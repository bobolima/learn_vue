const Mock = require('mockjs')

Mock.setup({
    // 延迟时间200毫秒
    timeout: 200
})
const Random = Mock.Random
const Result = {
    code: 200,
    msg: '操作成功',
    data: null
}

Mock.mock('/captchaImg', 'get', () => {
    Result.data = {
        codeId: Random.string(32),
        captchaImg: Random.dataImage('120x40', 'psvm'),
    }
    return Result
})

Mock.mock('/login', 'post', () => {
    Result.code = 200
    Result.msg = '请求成功'
    Result.data = {
        token: Random.string(56)
    }
    return Result
})

Mock.mock('/updatePassword', 'post', () => {
    Result.code = 200
    Result.msg = '请求成功'
    Result.data = {
    }
    return Result
})

Mock.mock('/logout', 'post', () => {
    Result.code = 200
    Result.msg = '请求成功'
    Result.data = {
    }
    return Result
})

Mock.mock('/menu/nav', 'get', () => {
    Result.code = 200
    Result.msg = '请求成功'
    Result.data = {
        nav: [
            {
                name: 'Manager',
                title: '系统管理',
                icon: 'el-icon-s-operation',
                path: '',
                component: '',
                children: [
                    {
                        name: 'User',
                        title: '用户管理',
                        icon: 'el-icon-s-custom',
                        path: '/user',
                        component: 'views/user/User.vue',
                        children: []
                    },
                    {
                        name: 'Role',
                        title: '角色管理',
                        icon: 'el-icon-rank',
                        path: '/role',
                        component: 'views/role/Role.vue',
                        children: []
                    },
                    {
                        name: 'Menu',
                        title: '菜单管理',
                        icon: 'el-icon-menu',
                        path: '/menu',
                        component: 'views/menu/Menu.vue',
                        children: []
                    }
                ]
            },
            {
                name: 'Tools',
                title: '系统工具',
                icon: 'el-icon-s-tools',
                path: '',
                component: '',
                children: [
                    {
                        name: 'Dict',
                        title: '数据字典',
                        icon: 'el-icon-s-order',
                        path: '/dict',
                        component: '',
                        children: []
                    },
                ]
            }
        ], // 菜单
        authority: [

        ] // 权限
    }
    return Result
})


