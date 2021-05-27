<template lang="pug">
  div.toast-wrapper
    p.text {{msg}}
</template>

<script>
export default {
  data() {
    return {
      msg: "测试"
    }
  }
}
</script>

<style lang="scss">
.toast-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 40px;
  background: rgb(0, 0, 0, 0.3);
  border-radius: 4px;

  .text {
    height: 40px;
    margin: 0;
    line-height: 40px;
    font-size: 14px;
    color: #fff;
    text-align: center;
  }
}
</style>