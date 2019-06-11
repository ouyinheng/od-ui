<template>
  <div class="toast">
    <od-button type="primary" @click="show">click😂</od-button>
  </div>
</template>

<script>
export default {
  name: 'toast',
  data() {
    return {}
  },
  methods: {
    show() {
      this.$toast.top('adsf')
    } 
  }
}
</script>
