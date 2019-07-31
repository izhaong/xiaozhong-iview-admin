<template>
  <div class="wrapper">
    <split-pane></split-pane>
  </div>
</template>
<script>
import SplitPane from '_c/split-pane'
export default {
  components: {
    SplitPane
  }
}
</script>
<style lang="less" scoped>
.wrapper {
  height: 200px;
  width: 400px;
}
</style>
