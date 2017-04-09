<template>
  <div>
    <pre>{{content}}</pre>
  </div>
</template>

<script>
export default {
  components: {  },
  created() {
    this.$store.dispatch('getWorks')
  },
  computed: {
    content() {
      return this.$store.state.works_data
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="less">

</style>
