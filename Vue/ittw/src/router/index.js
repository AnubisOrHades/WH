import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/user/login'
import home from '@/components/home/home'
import devices from '@/components/devices/devices'
import room from '@/components/room/room'
import user from '@/components/user/user'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'mui-active',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: {
        title: '登录'
      }
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      meta: {
        title: '主页'
      }
    },
    {
      path: '/devices',
      name: 'devices',
      component: devices,
      meta: {
        title: '设备'
      }},
    {
      path: '/room',
      name: 'room',
      component: room,
      meta: {
        title: '房间'
      }},
    {
      path: '/user',
      name: 'user',
      component: user,
      meta: {
        title: '用户信息'
      }
    }
  ]
})
