import axios from "axios";

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })
  
  // request拦截器
  instance.interceptors.request.use(config => {
    return config
  }, error => {

  })

  // Response 拦截器
  instance.interceptors.response.use(res => {
    return res.data
  }, error => {

  })

  // 发送请求
  return instance((config))
}
