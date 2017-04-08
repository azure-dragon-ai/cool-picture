<template>
<div>

  <div class="loading-content">
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 80 80" style="enable-background:new 0 0 80 80;" xml:space="preserve">
    <polygon id="XMLID_7_" class="st0" points="40.4,24.1 34.7,34 46.2,34 "/>
    <polygon id="XMLID_8_" class="st0" points="23.6,53 57.3,53 53.6,46 27.3,46 "/>
    <polygon id="XMLID_9_" class="st0" points="20,58 60.9,58 57.3,53 23.6,53 "/>
    <polygon id="XMLID_10_" class="st0" points="31,40 27.3,46 53.6,46 49.9,40 "/>
    <polygon id="XMLID_11_" class="st0" points="46.2,34 34.7,34 31,40 49.9,40 "/>
    <polygon id="XMLID_1_" class="st1" points="13.7,61.5 40.4,15.3 67.1,61.5 "/>
    </svg>
  </div>

</div>
</template>

<script>
export default {
  mounted() {

  },
  data() {
    return {
      msg: 'Hello World!'
    }
  }
}
</script>

<style lang="less">
.loading-content {
  width: 60%;
  margin: 80px auto;
  .st0 {
      fill: #FF3E5F;
  }
  .st1 {
      fill: none;
      stroke: #FF3E5F;
      stroke-width: 3;
      stroke-miterlimit: 10;
  }
}

</style>
