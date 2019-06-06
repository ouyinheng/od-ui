<template>
  <button :class="{
      'mat-button': true
    }">
    <span class="mat-button-wrapper"><slot></slot></span>
    <span class="mat-button-ripple mat-ripple"></span>
    <span class="mat-button-focus-overlay"></span>
  </button>
</template>

<script>
export default {
  name: "OdButton"
};
</script>

<style lang="scss" scoped>
.od-button {
  font-size: 1rem;
  background-color: pink;
}
</style>

