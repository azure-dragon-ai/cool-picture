<template>
<div class="loading_content_wapper">
  <div class="loading_content">
    <svg version="1.0" id="svg_loading_content" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 80 80" style="enable-background:new 0 0 80 80;" xml:space="preserve">
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

  }
}
</script>

<style lang="less">
.loading_content_wapper {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: 500;
}
.loading_content {
  position: absolute;
  width: 120px;
  height: 120px;
  top: 50%;
  left: 50%;
  margin-top: -100px;
  margin-left: -60px;

  #svg_loading_content {
    transform: rotate(45deg);
    transform-origin: 50% 55%;
    animation: rou 3s ease infinite;
  }

  #XMLID_7_ {
    transform: translate(-18px, 0);
    .cc_a(cc_al, .1s)
  }
  #XMLID_8_ {
    transform: translate(18px, 0);
    .cc_a(cc_ar)
  }
  #XMLID_9_ {
    transform: translate(-18px, 0);
    .cc_a(cc_al, .1s)
  }
  #XMLID_10_ {
    transform: translate(-18px, 0);
    .cc_a(cc_al, .1s)
  }
  #XMLID_11_ {
    transform: translate(18px, 0);
    .cc_a(cc_ar)
  }
  #XMLID_1_ {
    fill: none;
    stroke: #FF3E5F;
    stroke-width: 3;
    stroke-miterlimit: 10;

    stroke-dasharray: 20;
    stroke-dashoffset: 200;
    animation: offset 1.6s ease infinite;
  }

  .cc_a(@a, @d:0s) {
    fill: #FF3E5F;
    animation: @a .8s ease-in-out @d alternate infinite
  }

  @keyframes cc_al {
    to {
      transform: translate(18px, 0);
    }
  }
  @keyframes cc_ar {
    to {
      transform: translate(-18px, 0);
    }
  }
  @keyframes offset {
    to {
      stroke-dashoffset: 0;
    }
  }
  @keyframes rou {
    0% {transform: rotate(-45deg) scale(1.2);}
    15% {transform: rotate(-45deg) scale(1);}
    60% {transform: rotate(-45deg) scale(1);}
    100% {transform: rotate(675deg) scale(1.2);}
  }
}

</style>
