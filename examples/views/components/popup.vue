<template>
  <div class="show-drawer pb-4">
    <h4>抽屉</h4>
    <div class="flex wrap mb-2">
      <od-button @click="drawerVisible=!drawerVisible">默认</od-button>
    </div>
	<od-popup v-model="drawerVisible">
		<div>asdf</div>
	</od-popup>
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