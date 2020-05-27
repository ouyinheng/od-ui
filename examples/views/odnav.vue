<!--
 * @Author: your name
 * @Date: 2020-05-12 14:41:08
 * @LastEditTime: 2020-05-18 16:36:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \1.FrontWebe:\github\od-ui\examples\views\odnav.vue
--> 
<template>
  <nav class="odnav">
    <img alt="Vue logo" src="../assets/logo.png" @click="goHome">
	<div class="center"></div>
	<div class="right">
		<input type="color" v-model="colorValue">
	</div>
  </nav>
</template>

<script>
export default {
  name: 'odnav',
  data: () => ({
	colorValue: ''
  }),
  watch: {
	  colorValue(val) {
		  console.log(val)
	  }
  },
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
