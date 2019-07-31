<template>
  <div class="split-pane-wrapper">
    <div class="pane pane-left" :style="{width: leftOffsetPercent}"></div>
    <div></div>
    <div class="pane pane-right" :style="{left: leftOffsetPercent}"></div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      leftOffset: 0.3
    }
  },
  computed: {
    leftOffsetPercent () {
      return `${this.leftOffset * 100}% `
    }
  }
}
</script>
<style lang="less" scoped>
.split-pane-wrapper {
  height: 100%;
  width: 100%;
  position: relative;
  .pane {
    height: 100%;
    top: 0;
    position: absolute;
    &-left {
      background-color: #f0f;
      // width: 30%;
    }
    &-right {
      background-color: #0ff;
      top: 0;
      // left: 30%;
      right: 0;
      bottom: 0;
    }
  }
}
</style>
