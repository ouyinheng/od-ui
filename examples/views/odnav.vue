<template>
  <nav class="odnav">
    <img alt="Vue logo" src="../assets/logo.png" @click="goHome">
  </nav>
</template>

<script>
export default {
  name: 'odnav',
  methods: {
    goHome() {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
.odnav {
  height: 60px;
  box-sizing: border-box;
  padding: 0 0 0 30px;
  display: flex;
  align-items: center;
  img {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
}
</style>
