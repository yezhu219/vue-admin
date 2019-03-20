import Vue from 'vue'
import Router from 'vue-router'
import entry from '@/views/entry'
import login from '@/views/login'
Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/entry',
      name: 'entry',
      component: entry
    }
  ]
})
