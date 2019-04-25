<template>
    <div id='content' v-text="json_data">
    </div>
</template>

<script>
export default {
  name: 'api',
  data () {
    return {
      json_data: 'div'
    }
  },
  created () {
    var that = this
    this.axios.post('http://47.92.110.230/login/', 'username=13588888888&password=111111', {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'})
      .then(function (response) {
        console.log(response.data['return']['token'])
        that.json_data = response.data
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}
</script>

<style scoped>
  #content{
    width: 800px;
    margin: 0 auto;
    color: darkkhaki;
    font-size: 20px;
    line-height: 25px;
    text-align: center;
    overflow: auto;
  }
</style>
