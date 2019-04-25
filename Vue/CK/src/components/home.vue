<template>
    <div class="home">
      <div class="header" v-text="title"></div>
      <div class="info"></div>
      <div class="notice"></div>
      <div class="content">
        <div>
          <div class="register fl"></div>
          <div class="apply fr"></div>
          <p class="clear"></p>
          <div class="approve fl"></div>
          <div class="team fr"></div>
          <p class="clear"></p>
        </div>
      </div>
      <div class="footer">
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      title: '创客红星'
    }
  },
  created () {
    console.log(this.title)
  }
}
</script>

<style scoped>
.home{
  width: 100%;
  background: blueviolet;
}
  .header{
    background: #484F55;
    color: white;
    text-align: center;
    line-height: 3em;
  }
  .info{
    width: 90%;
    height: 12em;
    margin: 7% auto 0;
    background: green;
    border-radius: 10px;
  }
  .notice{
    width: 90%;
    height: 5em;
    margin: 7% auto 0;
    background: blue;
    border-radius: 10px;
  }
  .content div{
    width: 70%;
    margin: 7% auto 0;
  }
  .content div div{
    width: 45%;
    height: 9em;
    border-radius: 10px;
    margin: 0;
  }
  .register{
    background: red;
  }
  .apply{
    background: darkkhaki;
  }
  .approve{
    background: bisque;
  }
  .team{
    background: cornflowerblue;
  }
  .content p{
    height: 3em;
  }
</style>
