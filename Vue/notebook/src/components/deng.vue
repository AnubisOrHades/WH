<template>
  <div class="deng">
    <p v-text="txt"></p>
    <input type="text" v-model="txt"><br>
    <button @click="start">开始</button>&nbsp;&nbsp;&nbsp;&nbsp;<button @click="end">停止</button>
    {{id}}
  </div>
</template>

<script>
export default {
  name: 'deng',
  data () {
    return {
      txt: '我是一个跑马灯，哈哈哈！！！',
      id: 0
    }
  },
  methods: {
    start () {
      if (this.id !== 0) return
      this.id = setInterval(() => {
        var tou = this.txt.substring(0, 1)
        var yu = this.txt.substring(1)
        this.txt = yu + tou
      }, 100)
    },
    end () {
      clearInterval(this.id)
      this.id = 0
      // this.txt = 'end'
    }
  }
}
</script>

<style scoped>
  .deng {
    width: 800px;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    margin: 20px auto;
    background: linear-gradient(45deg, #211136, #bf5853);
  }
</style>
