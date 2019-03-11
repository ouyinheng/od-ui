<template>
  <div id="app">
    <header>
      <nav>
        <img alt="Vue logo" src="./assets/logo.png">
      </nav>
    </header>
    <article>
      <aside class="od-doc-nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </aside>
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
import simulator from '@/views/simulator.vue'
export default {
  name: 'app',
  components: {
    'simulator': simulator
  },
  mounted() {
    let app = document.getElementById("app");
    let height = document.body.clientHeight;
    console.log(height)
    app.style.height - height;
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: relative;
  width: 100%;
  height: 100%;
  img {
    width: 30px;
    height: 30px;
  }
  header {
    width: 100%;
    height: 60px;
    border-bottom: 1px solid gainsboro;
  }
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
  }
  .od-doc-content {
    position: absolute;
    top: 60px;
    left: 240px;
    right: 400px;
    bottom: 0;
    padding: 10px 40px;
    box-sizing: border-box;
  }
  .od-doc-simulator {
    width: 400px;
    position: absolute;
    right: 0;
    bottom: 0;
    top: 60px;
  }
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
