<template>
  <div class="flex wrap">
    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
    <i class="fa fa-link" aria-hidden="true"></i>
    <i class="fa fa-trash-o" aria-hidden="true"></i>
    <i class="fa fa-search" aria-hidden="true"></i>
    <div v-for="(item,index) in list" :key="index">
      <i :class="['fa', `fa-${item}`]" aria-hidden="true"></i>
      <i :class="['fa', `fa-${item}-o`]" aria-hidden="true"></i>
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
        "comment"
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
i {
  font-size: 20px;
  color: black;
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>
