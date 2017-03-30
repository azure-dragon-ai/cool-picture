<template>
  <div>
    <swiper loop auto :aspect-ratio="350/900" dots-class="cc_dots">
      <swiper-item class="black" v-for="(img, index) in data.showbox" :key="index"
        :style="{background:'url('+img.image+') center center / cover no-repeat'}">
      </swiper-item>
    </swiper>
    <content-nav />
    <div class="content_photo">
      <c-panel :list="data.list" />
    </div>
  </div>
</template>

<script>
import { Search, Swiper, SwiperItem } from 'vux'
import cPanel from './Panel'
import ContentNav from './ContentNav'

export default {
  components: {
    Search,
    Swiper,
    SwiperItem,
    cPanel,
    ContentNav
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
.content_photo{
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
