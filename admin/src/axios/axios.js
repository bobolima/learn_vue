import axios from 'axios'
import router from '../router'
import Element from 'element-ui'

// axios.defaults.baseURL = 'http://localhost:8081'

const request = axios.create({
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json; charset=utf8'
    }
})

request.interceptors.request.use(request => {
    request.headers['Authorization'] = localStorage.getItem('token')
    return request
})

request.interceptors.response.use(
    response => {
        let res = response.data
        if (res.code === 200) {
            return res
        } else {
            Element.Message.error(!res.msg ? '系统异常' : res.msg)
            console.log(res.msg)
            return Promise.reject(res.msg)
        }
    },
    error => {
        if (error.response.data) {
            error.message = error.response.data.msg
        }

        if (error.response.status === 401) {
            router.push('/login')
        }

        Element.Message.error(error.message, {duration: 5000})
        return Promise.reject(error)
    }
)

export default request