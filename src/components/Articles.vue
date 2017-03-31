<template>
<div>
  <div class="svg_wapper">
    <svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
    <path id="XMLID_36_" class="st0" d="M34.1,23.3l-3.5,10.5h4.8c5.2,0,9.5-4.2,9.5-9.5v0c0-4.7-3.4-8.7-8-9.5h-8.5l-6.3,18.9l-8.5-0.1
    	c-4.7-0.5-8.4-4.5-8.4-9.4v0c0-5.2,4.2-9.5,9.5-9.5h5.2l-2.9,8.8"/>
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

<style>
.svg_wapper {
  width: 20%;
  margin: 50px auto;
}

.st0 {
  fill: none;
  stroke: #4AE4F4;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;

  stroke-dasharray: 20;
  stroke-dashoffset: 200;
  animation: offset 2s cubic-bezier(.27,.56,.09,.98) forwards;
}

@keyframes offset {
  to {
    stroke-dashoffset: 0;
  }
}
</style>
