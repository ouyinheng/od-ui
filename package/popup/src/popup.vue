<template>
	<div class="od-popup" v-if="popupVisible">
		<transition>
			<div class="od-model" @click="cancel"></div>
		</transition>
		<div class="od-content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: 'od-popup',
	props: {
		value: {
			type: Boolean,
			default: false
		},
		position: {
			type: String,
			default: 'right'
		},
		style: Object,
		class: String | Object
	},
	watch: {
		value(val) {
			this.popupVisible = val;
		}
	},
	data: () =>({
		popupVisible: false
	}),
	methods: {
		cancel() {
			this.popupVisible = !this.popupVisible;
			this.$emit('input', this.popupVisible)
		}
	}
}
</script>

<style lang="scss" scoped>
.od-popup {
	width: 100%;
	.od-model {
		width: 100%;

	}
}
</style>