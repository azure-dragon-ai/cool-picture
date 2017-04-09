<template>
  <div>
    <pre>{{content}}</pre>
  </div>
</template>

<script>
export default {
  components: {  },
  created() {
    this.$store.dispatch('getArticles')
  },
  computed: {
    content() {
      return this.$store.state.articles_data
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
