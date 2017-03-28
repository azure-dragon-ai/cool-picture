<template>
  <div>
    <search></search>
    <pre>{{datalist}}</pre>
  </div>
</template>

<script>
import { Search } from 'vux'

export default {
  components: {
    Search
  },
  computed: {
    datalist() {
      return this.$store.state.base_data
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
