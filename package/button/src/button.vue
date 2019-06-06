<template>
    <button :class="{
      'od-button': true
    }">
      <slot></slot>
    </button>
</template>

<script>
export default {
  name: 'OdButton'
}
</script>

<style lang="scss" scoped>
.od-button {
  font-size: 1rem;
  background-color: pink;
}
</style>

