<template>
  <scroller lock-x use-pullup
    :pullup-config="pullup_cfg"
    v-model="status"
    @on-pullup-loading="pullup"
    height="-52"
    ref="scroller">
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
  </scroller>
</template>

<script>
import { Search, Swiper, SwiperItem, Scroller } from 'vux'
import cPanel from './Panel'
import ContentNav from './ContentNav'

export default {
  components: {
    Search,
    Swiper,
    SwiperItem,
    Scroller,
    cPanel,
    ContentNav
  },
  computed: {
    data() {
      this.$nextTick(() => {
        this.status.pullupStatus = 'default'
        this.$refs.scroller.reset()
      })
      return this.$store.state.base_data
    }
  },
  methods: {
    pullup() {
      this.$store.dispatch('getListBy', ++this.page)
    }
  },
  data () {
    return {
      page: 1,
      status: {
        pullupStatus: 'default'
      },
      pullup_cfg: {
        content: '上滑加载更多',
        downContent: '松手',
        upContent: '上滑加载更多',
        loadingContent: '加载中...'
      }
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
