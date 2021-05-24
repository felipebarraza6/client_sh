import axios from 'axios'

const BASE_URL = "https://api.tago.io/data"


export const INSTANCE = axios.create({
      'baseURL': BASE_URL,
          headers: {
              Authorization: '81416e29-0f0f-4498-af83-ac25265d15c3'
          }
})


export const GET = (endpoint) => {

  const request = INSTANCE.get(endpoint)
  return request

}
