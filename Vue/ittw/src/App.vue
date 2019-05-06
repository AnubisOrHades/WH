<template>
  <div id="app">
    <mt-header :title="title">
    </mt-header>
    <router-view/>
    <nav class="mui-bar mui-bar-tab">
      <router-link :to='{name:"home"}' class="mui-tab-item">
        <span class="mui-icon iconfont  icon-zhuye"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <!--<router-link :to='{name:"home"}' class="mui-tab-item">-->
        <!--<span class="mui-icon iconfont  icon-zhuye"></span>-->
        <!--<span class="mui-tab-label">首页</span>-->
      <!--</router-link>-->
      <router-link :to='{name:"devices"}' class="mui-tab-item">
        <span class="mui-icon iconfont  icon-shebei"></span>
        <span class="mui-tab-label">设备</span>
      </router-link>
      <router-link :to='{name:"room"}' class="mui-tab-item">
        <span class="mui-icon iconfont  icon-fangjian"></span>
        <span class="mui-tab-label">房间</span>
      </router-link>
      <router-link :to='{name:"user"}' class="mui-tab-item">
        <span class="mui-icon iconfont  icon-yonghu"></span>
        <span class="mui-tab-label">用户</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
import Vue from 'vue'
import {Header, Tabbar, TabItem} from 'mint-ui'

Vue.component(Header.name, Header)
Vue.component(Tabbar.name, Tabbar)
Vue.component(TabItem.name, TabItem)

export default {
  name: 'App',
  data () {
    return {
      title: 'dfdf',
      selected: {
        home: 'home',
        room: 'room'
      }
    }
  }
}
</script>

<style>

</style>
