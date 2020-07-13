/*
 * @Author: Vimalakirti
 * @Date: 2020-07-13 20:58:16
 * @LastEditTime: 2020-07-13 21:00:17
 * @Description: 
 * @FilePath: \bilibili\http.js
 */
import axios from 'axios'

const http = axios.create({
  baseURL: 'http://112.74.99.5:3000/web/api'
})
export default http