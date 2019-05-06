<template>
  <div class="home">首页

  </div>
</template>

<script>
import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui'

Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
export default {
  name: 'home',
  data () {
    return {
      title: 'home'
    }
  }
}
</script>

<style scoped>

</style>
