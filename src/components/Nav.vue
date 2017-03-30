<template>
  <div class="nav">
    <ul>
      <router-link
        v-for="(li, index) in navlist"
        :to="li.hf"
        :key="index"
        active-class="active"> {{li.tit}}
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navlist: [
        {
          ic: 'icon-shouye16',
          hf: '/',
          tit: '首页'
        },
        {
          cn: 'glow',
          ic: 'icon-shouye8',
          hf: 'javascript:',
          tit: '作品'
        },
        {
          cn: 'blue',
          ic: 'icon-icon4',
          hf: 'javascript:',
          tit: '文章'
        },
        {
          cn: 'qinblue',
          ic: 'icon-shouye15',
          hf: 'javascript:',
          tit: '我的'
        }
      ]
    }
  }
}
</script>

<style lang="less">
@import "../style/mixin.less";

.nav {

}

</style>
