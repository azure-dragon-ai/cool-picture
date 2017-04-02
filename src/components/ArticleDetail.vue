<template>
<div>
  <div class="cc_detail_content" v-html="content"></div>

</div>
</template>

<script>
import { jsonp, $dom, workContent } from '../mixin/util'
import { io_detail } from '../mixin/url'

export default {
  mounted() {
    jsonp(io_detail, {path: this.$route.path}).then(res => $dom(res.body)).then($ => {
      this.content = workContent($)
    })
  },
  data () {
    return {
      content: ''
    }
  }
}
</script>

<style lang="less">
.cc_detail_content{
  padding: 15px;
  box-sizing: border-box;
  overflow: hidden;

  img{
    max-width: 100%;
    height: auto !important;
  }
}
</style>
