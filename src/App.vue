<template>
  <div id="app">
    <router-view class="content"></router-view>
    <v-nav></v-nav>
  </div>
</template>

<script>
import vNav from './components/Nav.vue'

export default {
  name: 'app',
  components: { vNav }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}

.image {
  width: 100%;
}
</style>
