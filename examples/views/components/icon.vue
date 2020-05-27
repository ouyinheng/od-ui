<!--
 * @Author: your name
 * @Date: 2020-05-12 14:41:08
 * @LastEditTime: 2020-05-18 16:53:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \1.FrontWebe:\github\od-ui\examples\views\components\icon.vue
-->
<template>
  <div class="flex wra show-icon">
    <div class="grid-group" v-for="(item, index) in list" :key="index">
      <div class="grid-item">
        <div :class="['icon', 'fa', `fa-${item}`]" aria-hidden="true"></div>
        <div class="title">{{ `${item}` }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "icon",
  data() {
    return {
      list: [
        "address-book",
        "address-card",
        "envelope-open",
        "drivers-license",
        "id-card",
        "user",
        "bell",
        "building",
		"comment",
		"pencil-square-o",
		"link",
		"trash-o",
		"search",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.show-icon {
	width: 100%;
	flex-wrap: wrap;
	text-align: center;
	.grid-group {
		width: 25%;
		min-width: 25%;
		.grid-item {
			margin-bottom: 10px;
			.icon {
				height: 30px;
				line-height: 30px;
				font-size: 20px;
				color: #666;
				margin-right: 10px;
				margin-bottom: 10px;
			}
			.title {
				font-size: 12px;
				margin-bottom: 20px;
			}
		}
	}
}
</style>
