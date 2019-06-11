<template>
  <div class="animates flex wrap">
    <div class="m-2 group" v-for="(item, index) in list" :key="index">
      <transition :name="item.name">
        <od-button type="primary" shadow v-if="item.show" @click="show(index)">{{item.name}}</od-button>
      </transition>
    </div>
  </div>
</template>

<script>
import { setTimeout } from "timers";
export default {
  name: "animates",
  data() {
    return {
      list: [
        {
          name: "bounce",
          show: true
        },
        {
          name: "flash",
          show: true
        },
        {
          name: "pulse",
          show: true
        },
        {
          name: "rubberBand",
          show: true
        },
        {
          name: "shake",
          show: true
        },
        {
          name: "swing",
          show: true
        },
        {
          name: "tada",
          show: true
        },
        {
          name: "wobble",
          show: true
        },
        {
          name: "jello",
          show: true
        },
        {
          name: "flip",
          show: true
        },
        {
          name: "jackInTheBox",
          show: true
        },
        {
          name: 'heartBeat',
          show: true
        }
      ]
    };
  },
  methods: {
    show(index) {
      this.list[index].show = !this.list[index].show;
      this.list.splice(0, 0);
      setTimeout(() => {
        this.list[index].show = !this.list[index].show;
        this.list.splice(0, 0);
      }, 1000);
    }
  }
};
</script>

<style lang="scss" scoped>
.group {
  min-width: 90px;
  padding: 10px 0;
}
.od-button {
  max-width: 100px!important;
  min-width: 100px!important;
}
</style>
