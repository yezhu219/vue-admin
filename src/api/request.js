import {
  post,
  get
} from './http.js'
export default {
  login(params) {
    return post('/login', params)
  }
}
