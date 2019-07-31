<template>
  <div>
    <list :list=list :render="renderFunc"></list>
  </div>
</template>
<script>
import List from '_c/list'
export default {
  data () {
    return {
      list: [
        { name: 'name1' },
        { name: 'name2' }
      ]
    }
  },
  components: {
    List
  },
  methods: {
    renderFunc (h, name) {
      return (
        <i on-click={this.handleClick} style={{ color: 'blue' }}>{name}</i>
      )
    },
    handleClick (e) {
      console.log(e)
    }
  }
}
</script>
