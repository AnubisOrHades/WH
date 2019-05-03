<template>
    <div>room
    <router-link :to='{name:"home"}'>首页</router-link>
      <router-view/>
    </div>
</template>

<script>
export default {
  name: 'room'
}
</script>

<style scoped>

</style>
