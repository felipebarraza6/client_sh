import { POST } from './config'


const login = async(data)=> {
    const request = await POST(`users/login/`, {
        email: data.user,
        password: data.password
    })
    return request.data
}


const api = {
    user: {
        login
    }
}


export default api