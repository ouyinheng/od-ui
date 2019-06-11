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
      console.log(this.position,this.msg)
  }
}
</script>
