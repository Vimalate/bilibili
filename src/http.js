/*
 * @Author: Vimalakirti
 * @Date: 2020-07-13 20:58:16
 * @LastEditTime: 2020-07-24 22:16:34
 * @Description: 
 * @FilePath: \bilibili\bilibili\src\http.js
 */
import axios from 'axios'
import router from './router'
import Vue from 'vue'

const http = axios.create({
  baseURL: 'http://112.74.99.5:3000/web/api'
})

http.interceptors.request.use(config => {
  if (localStorage.getItem('token') && localStorage.getItem('id')) {
    config.headers.Authorization = 'Bearer ' + localStorage.getItem('token')
  }
  return config
}, err => {
  return Promise.reject(err)
})

http.interceptors.response.use(response => {
  return response
}, err => {
  console.dir(err)
  if (err.response.status === 401 || err.response.status === 402) {
    router.push('/login')
    console.log('login')
    Vue.prototype.$msg.fail(err.response.data.message)
  }
  Promise.reject(err)
})
export default http