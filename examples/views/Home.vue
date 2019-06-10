<template>
  <div class="home">
    <header>
      <od-nav></od-nav>
    </header>
    <article>
      <div class="od-side">
        <od-aside></od-aside>
      </div>
      <section class="od-doc-content">
        <router-view/>
      </section>
      <aside class="od-doc-simulator">
        <simulator></simulator>
      </aside>
    </article>
  </div>
</template>

<script>
// @ is an alias to /src
import simulator from '@/views/simulator.vue'
import odnav from '@/views/odnav.vue'
import odaside from '@/views/odaside.vue'

export default {
  name: 'home',
  components: {
    'simulator': simulator,
    'od-aside': odaside,
    'od-nav': odnav
  }
}
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  height: 60px;
  border-bottom: 1px solid gainsboro;
}
.article {
  
}
.od-doc-content {
  position: absolute;
  top: 60px;
  left: 240px;
  right: 400px;
  bottom: 0;
  padding: 10px 40px;
  box-sizing: border-box;
  overflow: auto;
}
.od-doc-simulator {
  width: 400px;
  position: absolute;
  right: 0;
  bottom: 0;
  top: 60px;
}
@media screen and (max-width: 768px){
  header,.od-doc-content,.od-side {
    display: none;
  }
  .od-doc-simulator {
    width: 100%;
    height: 100vh;
    top: 0;
    bottom: 0;
    padding: 0;
    margin: 0;
  }
}
</style>

