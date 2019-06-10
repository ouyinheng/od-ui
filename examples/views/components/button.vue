<template>
  <div class="pb-4">
    <h4>按钮类型</h4>
    <div class="flex wrap mb-2">
      <od-button>默认按钮</od-button>
      <od-button type="primary">主要按钮</od-button>
      <od-button type="info">信息按钮</od-button>
    </div>
    <od-button type="warning">警告按钮</od-button>
    <od-button type="danger">危险按钮</od-button>
    <h4>水波纹</h4>
    <div class="mt-4">
      <od-button ripple>水波纹</od-button>
    </div>
    <h4>阴影</h4>
    <div class="mt-4">
      <od-button type="primary" shadow>主要按钮</od-button>
    </div>
    <h4>图标</h4>
    <div class="mt-4">
      <od-button icon="search"></od-button>
    </div>
    
    <h4>圆角</h4>
    <div class="mt-4 mb-2">
      <od-button type="primary" shadow round>主要按钮</od-button>
      <od-button type="success" shadow round>主要按钮</od-button>
      <od-button type="warning" shadow round>主要按钮</od-button>
    </div>
    <od-button type="danger" shadow round>主要按钮</od-button>
    <h4>块级</h4>
    <div class="mt-4 mb-2">
      <od-button type="primary" shadow round block>块级按钮</od-button>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.od-button + .od-button {
  margin-left: 5px;
}
</style>

