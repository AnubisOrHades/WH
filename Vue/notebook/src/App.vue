<template>
  <div id="app">
    <!--父组件向子组件传递参数-->
    <nav-vue v-bind:nav_lis="nav_lis"></nav-vue>
    <!--<img src="./assets/logo.png">-->
    <router-view/>
    <!--<div class="clear"></div>-->
    <div class="content">
      <ul class="cnav">
        <li><a href="/#/">home</a></li>
        <!--动态拼接路由-->
        <li v-for="(url,index) in urls" :key="index"><a :href="'/#/'+url">{{url}}</a></li>
      </ul>
      <input type="button" value="listen" @click="listen">
    </div>
  </div>
</template>

<script>
// import orderVue from './components/order'
// import Nav from './components/nav'
import connect from './connector'

import YearTable from 'element-ui/packages/date-picker/src/basic/year-table'

export default {
  name: 'App',
  components: {YearTable},
  // 注册局部组件
  // components: {
  //   navVue: Nav,
  //   orderVue
  // },
  data () {
    return {
      nav_lis: [
        '游戏',
        '新闻',
        '关于',
        '客服中心',
        '联系投资者'
      ],
      urls: [
        'order',
        'filter',
        'mintui',
        'element',
        'api'
      ]
    }
  },
  methods: {
    listen () {
      connect.$on('phone', function (msg) {
        console.log(msg)
      })
    }
  }
}
</script>

<style>
  .content {
    position: fixed;
    padding-top: 20px;
    top: 58px;
    left: 50px;
    font-size: 20px;
    font-family: "Microsoft YaHei UI";
  }

  .cnav {
    width: 250px;
    list-style: none;
    background: cadetblue;
    text-align: center;
  }

  .cnav li {
    height: 49px;
    line-height: 49px;
    border-bottom: cornflowerblue 1px solid;
  }

  .cnav li a {
    display: block;
    text-decoration: none;
  }

  .cnav li a:hover {
    background: #8f6aff;
    color: white;
  }
</style>
