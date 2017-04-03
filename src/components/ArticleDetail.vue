<template>
  <div class="content_full">
    <user-info-min :info="userinfo" />
    <div class="detail_content" v-html="content"></div>
  </div>
</template>

<script>
import { jsonp, $dom, workContent, getUserInfoMin } from '../mixin/util'
import { io_detail } from '../mixin/url'
import UserInfoMin from './UserInfoMin.vue'

export default {
  components: { UserInfoMin },
  mounted() {
    jsonp(io_detail, {path: this.$route.path}).then(res => $dom(res.body)).then($ => {
      this.content = workContent($)
      this.userinfo = getUserInfoMin($)
    })
  },
  data () {
    return {
      content: '',
      userinfo: {}
    }
  }
}
</script>

<style lang="less">
.detail_content{
  padding: 15px;
  box-sizing: border-box;
  overflow: hidden;

  img{
    max-width: 100%;
    height: auto !important;
  }
}
</style>
