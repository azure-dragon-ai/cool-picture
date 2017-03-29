<template>
  <div class="cc_panel_wapper">
    <div class="cc_panel_detail" v-for="(item, index) in list" :key="index">
      <div class="cc_panel_detail_image_wapper">
        <img :src="item.image" alt="预览图" class="image">
      </div>
      <div class="cc_panel_detail_info">
        <h4 class="title">{{item.title}}</h4>
      </div>
    </div>
    <pre>{{list}}</pre>
  </div>
</template>

<script>
export default {
  props: [ 'list' ]
}
</script>

<style lang="less">
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
      width: 50%;
      height: 180px;
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
          font-size: 12px;
          line-height: 1.6;
          font-weight: 400;
        }
      }
    }
  }
</style>
