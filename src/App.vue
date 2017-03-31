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
  height: auto;
}

.content{
  position: absolute;
  top:0;
  left: 0;
  bottom: 52px;
  width: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  overflow-scrolling: touch;
}
</style>
