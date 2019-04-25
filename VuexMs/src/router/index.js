import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'

// const userlist = () => import('@/components/userinfo/userlist')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: login
    },
    {
      path: '/index', 
      name: 'index',
      component: () =>import('@/components/index'),
      children:[
        {
          path: '/index/userlist',
          name: 'userlist',
          component: () => import('@/components/userinfo/userlist')
        },
        {
          path: '/index/useradd',
          name: 'useradd',
          component: () => import('@/components/userinfo/useradd')
        },
        {
          path: '/index/passwordedt',
          name: 'passwordedt',
          component: () => import('@/components/userinfo/passwordedt')
        },
        {
          path: '/index/shophead',
          name: 'shophead',
          component: () => import('@/components/shoping/shophead')
        },
      ]
    }
  ]
})
