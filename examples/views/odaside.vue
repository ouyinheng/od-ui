<template>
  <aside class="od-doc-nav">
    <div v-for="(title, index) in (Object.keys(list))" :key="index" class="group-container">
      <p class="side-nav-title">{{title}}</p>
      <div class="side-nav-items" v-for="(nav, index) in list[title]" :key="index">
        <div v-if="nav.desc">
          <router-link :class="$route.name===nav.name ? 'active' : ''" v-if="nav.name" :to="{name: nav.name}">{{nav.desc}}</router-link>
          <p v-else class="side-nav-group">{{nav.desc}}</p>
          <div v-for="(item, index) in nav.items" :key="index">
            <router-link :to="{name: item.name}" :class="$route.name===item.name ? 'active' : ''" class="slid-nav-component">{{item.desc}}</router-link>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
import navlist from '../nav.config.json'
export default {
  name: 'od-aside',
  data() {
    return {
      list: navlist
    }
  },
}
</script>

<style lang="scss" scoped>
.od-doc-nav {
  position: absolute;
  top: 60px;
  left: 0;
  bottom: 0;
  width: 240px;
  border-right: 1px solid gainsboro;
  display: flex;
  flex-direction: column;
  padding: 10px 40px;
  box-sizing: border-box;
  .group-container{
    margin-bottom: 32px;
  }
  .side-nav-title{
    padding: 0 24px 8px;
    color: #8DABC4;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  .side-nav-items{
    font-size: 14px;
    font-weight: normal;
    line-height: 1.8;
    a{
      display: block;
      position: relative;
      padding: 8px 24px;
      color: #3F536E;
      font-weight: normal;
      line-height: 1.5;
      cursor: pointer;
    }
    .side-nav-group{
      display: block;
      position: relative;
      padding: 6px 0 6px 24px;
      color: #2C405A;
      font-weight: bold;
    }
    .slid-nav-component{
      display: block;
      position: relative;
      padding: 6px 24px 6px 32px;
      color: #616367;
      font-size: 14px;
    }
    .active{
      color: #3FAAF5;
    }
  }
}
</style>
