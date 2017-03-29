<template>
  <div>
    <swiper loop auto :aspect-ratio="350/900" dots-class="cc_dots">
      <swiper-item class="black" v-for="(img, index) in data.showbox" :key="index"
        :style="{background:'url('+img.image+') center center / cover no-repeat'}">
      </swiper-item>
    </swiper>
    <search></search>
    <div class="photo_content">
      <c-panel :list="data.list"></c-panel>
    </div>
  </div>
</template>

<script>
import { Search, Swiper, SwiperItem } from 'vux'
import cPanel from './Panel'

export default {
  components: {
    Search,
    Swiper,
    SwiperItem,
    cPanel
  },
  computed: {
    data() {
      return this.$store.state.base_data
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="less">
  .photo_content{
    background: #fff;
  }
  .cc_dots{
    bottom: 5px !important;
    .vux-icon-dot {
      background-color: rgba(255, 255, 255, .4) !important;
      &.active {
        background-color: #8AEEB1 !important;
      }
    }
  }
</style>
