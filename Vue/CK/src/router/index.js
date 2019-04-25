import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/h',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        title: 'HelloWord'
      }
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: 'Home'
      }
    }
  ]
})
