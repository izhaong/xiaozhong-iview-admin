<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link :to="{name: 'about'}">About</router-link>
    </div>
    <transition :name="routerTransition">
      <transition-group name="router">
        <router-view key="default"/>
        <router-view key="email" name="email"/>
        <router-view key="tel" name="tel"/>
      </transition-group>
    </transition> -->
    <router-view/>
  </div>
</template>
<script>
export default {
  data () {
    return {
      routerTransition: ''
    }
  },

  watch: {
    $route (to) {
      to.query &&
        to.query.transitionName &&
        (this.routerTransition = to.query.transitionName)
    }
  }
}
</script>

<style lang="less" scoped>
html,body{
  height: 100%;
}
body{
  margin: 0;
}
.router-enter {
  opacity: 0;
}
.router-enter-active {
  transition: opacity 6s ease;
}
.router-enter-to {
  opacity: 1;
}
.router-leave {
  opacity: 1;
}
.router-leave-active {
  transition: opacity 1s ease;
}
.router-leave-to {
  opacity: 0;
}
#app {
  height: 100%;
}
</style>
