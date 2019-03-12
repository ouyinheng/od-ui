<template>
    <button :class="{
      'od-button': true
    }">
      <slot></slot>
    </button>
</template>

<script>
export default {
  name: 'od-button'
}
</script>

<style lang="scss" scoped>
.od-button {
  font-size: 1rem;
}
</style>

