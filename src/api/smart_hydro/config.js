import axios from 'axios'

export const BASE_URL = 'http://186.64.123.204:8000/api/'

const INSTANCE = axios.create({
    baseURL: BASE_URL
})

export const POST = async (endpoint, data) => {

    const request = await INSTANCE.post(endpoint, data)
    return request

}