<template>
  <div>
    <h1>email page</h1>
    <button @click="handleClick">按我</button>
  </div>
</template>
<script>
export default {
  mounted () {
    console.log(this.$bus)
  },
  methods: {
    handleClick (e) {
      this.$bus.$emit('on-click', 'hello')
    }
  }
}
</script>
