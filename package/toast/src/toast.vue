<!--
 * @Author: your name
 * @Date: 2020-05-12 14:41:08
 * @LastEditTime: 2020-05-15 14:18:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \1.Webe:\github\od-ui\package\toast\src\toast.vue
--> 
<template>
  <div :class="['od-toast', positionName]">
    <div>
      {{msg}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'OdToast',
  computed: {
    positionName() {
      return `od-${this.position}`
    }
  },
  data(){
    return {
      position: 'top',
      msg: ''
    }
  },
  methods: {},
  mounted() {
	// console.log(this.position,this.msg)
  }
}
</script>
