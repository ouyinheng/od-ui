<template>
  <div class="simulator">
    <div class="group">
      <div class="iframe">
        <iframe :src="local+path" frameborder="0"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "simulator",
  data() {
    return {
      path: ""
    };
  },
  computed: {
    local() {
      return window.location.origin.indexOf('ouyinheng')!==-1 ? window.location.origin + "/od-ui/dist/#" :  window.location.origin + "/#" ;
    }
  },
  watch: {
    "$route.path"(val) {
      this.path = "/show" + val;
    }
  },
  created() {
    this.path = "/show" + this.$route.path;
  }
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 768px) {
  .group,.iframe,iframe {
    width: 100vw;
    height: 100vh;
    background-image: none !important;
    background-color: #edf0f4;
  }
}
@media screen and (min-width: 769px) {
  .simulator {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .group {
      width: 330px;
      height: 600px;
      min-height: 600px;
      max-height: 600px;
      background-image: url("../assets/iphoneX.38c8778.png");
      background-repeat: no-repeat;
      background-size: 100% 98%;
      box-sizing: border-box;
      margin-top: 10px;
      position: relative;
      .iframe {
        min-height: 400px;
        position: absolute;
        top: 58px;
        left: 21px;
        right: 23px;
        bottom: 35px;
        overflow: hidden;
        border-radius: 5px 5px 15px 15px;
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
}
</style>

