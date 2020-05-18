<!--
 * @Author: your name
 * @Date: 2020-05-15 14:24:31
 * @LastEditTime: 2020-05-18 16:31:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \1.Webe:\github\od-ui\examples\views\components\drawer.vue
-->
<template>
  <div class="show-drawer pb-4">
    <h4>抽屉</h4>
    <div class="flex wrap mb-2">
      <od-button @click="drawerVisible=!drawerVisible">默认</od-button>
    </div>
	<od-drawer v-model="drawerVisible">
		<div slot="content">asdf</div>
		<div slot="footer">
			<od-button type="info" @click="drawerVisible=!drawerVisible">默认按钮</od-button>
			<od-button type="primary">主要按钮</od-button>
		</div>
	</od-drawer>
  </div>
</template>

<script>
	export default {
		name: '',
		data() {
			return {
				drawerVisible: false
			}
		}
	}
</script>

<style lang="scss" scoped>
.show-drawer {
}
.od-button + .od-button {
  margin-left: 5px;
}
</style>
