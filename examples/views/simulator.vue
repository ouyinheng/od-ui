<template>
  <div class="simulator">
    <div class="group">
      <div class="iframe">
        <iframe src="" frameborder="0"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'simulator'
}
</script>

<style lang="scss" scoped>
.simulator {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  .group {
    width: 330px;
    height: 600px;
    background-image: url('../assets/iphoneX.38c8778.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    box-sizing: border-box;
    margin-top: 10px;
    .iframe {
      position: absolute;
      top: 66px;
      left: 55px;
      right: 57px;
      bottom: 22px;
      overflow: hidden;
      border-radius: 5px 5px 55px 55px;
      border: 1px solid #edf0f4;
      border-top: none;
      background-color: #edf0f4;
      overflow: hidden;
    }
    iframe {
      width: 100%;
      height: 100%;
    }
  }
}
</style>

