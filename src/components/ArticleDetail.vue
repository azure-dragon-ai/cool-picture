<template>
<div>

</div>
</template>

<script>
import { jsonp, $dom } from '../mixin/util'
import { io_detail } from '../mixin/url'

export default {
  mounted() {
    jsonp(io_detail, {path: this.$route.path}).then(res => console.log(JSON.stringify(res)))
  },
  data () {
    return {
      data: {}
    }
  }
}
</script>

<style>

</style>
