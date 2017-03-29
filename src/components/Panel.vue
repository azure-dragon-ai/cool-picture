<template>
  <div class="cc_panel_wapper">
    <div class="cc_panel_detail" v-for="(item, index) in list" :key="index">
      <div class="cc_panel_detail_image_wapper">
        <img :src="item.image" alt="预览图" class="image">
      </div>
      <div class="cc_panel_detail_info">
        <h4 class="title">{{item.title}}</h4>
        <span class="desc">
          <i class="iconfont icon-icon1"></i> {{item.reqi}}
          <i class="iconfont icon-shouye1"></i> {{item.tuijian}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [ 'list' ]
}
</script>

<style lang="less">
  @import "../style/index.less";

  .cc_panel_wapper{
    margin-left: -15px;
    padding: 15px;
    box-sizing: border-box;
    &:after {
      content: "";
      display: block;
      clear: both;
    }

    .cc_panel_detail{
      position: relative;
      width: 50%;
      overflow: hidden;
      font-size: 0;
      float: left;
      padding-left: 15px;
      padding-bottom: 15px;
      box-sizing: border-box;

      &_image_wapper {
        margin-bottom: 5px;
        .image {
          border-radius: 3px
        }
      }

      &_info {
        .title {
          display: -webkit-box;
          height: 40px;
          margin-bottom: 18px;
          text-overflow: ellipsis;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;

          color: @color_tit;
          font-size: 12px;
          line-height: 1.6;
          font-weight: 400;
        }
        .desc {
          position: absolute;
          left: 15px;
          bottom: 15px;
          color: @color_desc;
          font-size: 12px;
          line-height: 1;
          i {
            vertical-align: -2px;
          }
        }
      }
    }
  }
</style>
