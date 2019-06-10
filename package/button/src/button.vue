<template>
  <button
    :class="['od-button', className, plainName, shadowName, iconName, roundName, blockName]"
    @touchstart="showRipple($event.touches[0])"
    @click="showRipple($event)"
    ref="btn"
  >
    <span v-if="icon" :class="['fa', `fa-${icon}`]"></span>
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script>
import { setTimeout } from "timers";
export default {
  name: "OdButton",
  props: {
    type: {
      type: String,
      default: "default"
    },
    plain: {},
    ripple: {
      type: Boolean,
      default: false
    },
    shadow: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String
    },
    round: {
      type: Boolean,
      default: false
    },
    block: {
      type:Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  computed: {
    className() {
      // if(this.icon&&this.type==='default') {
      //   return ``;
      // } 
      return `od-button--${this.type}`;
    },
    plainName() {
      return this.plain === undefined ? true : this.plain;
    },
    shadowName() {
      return this.shadow === undefined || this.shadow === true ? 'od-shadow' : '';
    },
    iconName() {
      return this.icon ? 'od-icon' : ''
    },
    roundName() {
      return this.round ? 'od-round' : ''
    },
    blockName() {
      return this.block ? 'od-block' : ''
    }
  },
  methods: {
    showRipple(e) {
      if (!this.ripple) return;
      const btn = this.$refs.btn;
      const span = document.createElement("span");
      span.setAttribute("class", "ripple");

      const event = e;
      //  获取鼠标位置
      var x = event.pageX || document.documentElement.scrollLeft + document.body.scrollLeft + event.clientX;
      var y = event.pageY || document.documentElement.scrollTop + document.body.scrollTop + event.clientY;
      var wx = btn.offsetWidth;
      x = x - btn.offsetLeft - wx / 2;
      y = y - btn.offsetTop - wx / 2;
      // 添加.ripple元素
      var ripple = document.createElement("span");
      ripple.className = "ripple";
      var firstChild = btn.firstChild;
      if (firstChild) {
        btn.insertBefore(ripple, firstChild);
      } else {
        btn.appendChild(ripple);
      }
      span.style.cssText = `width:${wx}px;height:${wx}px;position:absolute;top:${y}px;left:${x}px;animation: rippleEffect 2s cubic-bezier(0.23, 1, 0.32, 1)`;
      btn.appendChild(span);
      setTimeout(() => {
        btn.removeChild(span);
      }, 1500);
    }
  }
};
</script>

<style lang="scss">
.od-button {
  position: relative;
}
.ripple {
  display: block;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.5);
  -webkit-transform: scale(0);
  transform: scale(0);
  position: absolute;
  opacity: 1;
  z-index: 10;
}
@keyframes rippleEffect {
  100% {
    -webkit-transform: scale(2);
    transform: scale(2);
    opacity: 0;
  }
}
</style>

