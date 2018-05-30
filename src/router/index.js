import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
      // meta: {
      //   keepAlive: true // 需要被缓存
      // }
    }, {
      path: '/home',
      name: 'Home',
      component: Home
      // meta: {
      //   keepAlive: true // 需要被缓存
      // }
    }
  ]
})
