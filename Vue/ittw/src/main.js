// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'mint-ui/lib/style.css'
import '../static/mui/dist/css/mui.css'
import '../static/font_icon/iconfont.css'
import Axios from 'axios'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.axios = Axios

// 设置默认请求路由
Axios.defaults.baseURL = 'http://127.0.0.1:8000/api/'
// 设置默认请求头
Axios.defaults.headers = {
  Authorization: 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozNCwidXNlcm5hbWUiOiIxNTk4ODg4ODg4OCIsImV4cCI6MTU1NzEyNjAyOCwiZW1haWwiOiIifQ.nzZlPhsaDSPjxto8-EfQCr7pAyua5ynayornfr7bbJc'
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  data () {
    return {
      token: 'token'
    }
  }
})
// 设置动态标题
router.beforeEach((to, from, next) => {
  if (to.meta.content) {
    let head = document.getElementsByTagName('head')
    let meta = document.createElement('meta')
    meta.content = to.meta.content
    head[0].appendChild(meta)
  }
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
