<template>
<div>
    <div class="cc_detail_content">
      <div class="cc_detail_content_info" v-html="info"></div>
      <ul class="cc_detail_content_show" v-html="show"></ul>
    </div>
</div>
</template>

<script>
import { jsonp, $dom, workInfor, workShow } from '../mixin/util'
import { io_detail } from '../mixin/url'

export default {
  mounted() {
    jsonp(io_detail, {path: this.$route.path}).then(res => $dom(res.body)).then($ => {
      this.info = workInfor($)
      this.show = workShow($)
    })
  },
  data () {
    return {
      info: '',
      show: ''
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

  li {
    list-style: none;
  }

  &_info {
    margin-bottom: 15px;
  }
  &_show {
    .wsContent{
      font-size: 0;
    }
    .wsDes p{
      line-height: 1.4;
      margin: 6px auto;
    }
  }
}
</style>
