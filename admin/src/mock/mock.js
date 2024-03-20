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


