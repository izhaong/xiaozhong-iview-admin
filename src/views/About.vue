<template>
  <div class="about">
    <h1>about</h1>
    <h1>{{name}}</h1>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  props: {
    name: {
      type: [Number, String],
      default: 2
    }
  },
  mounted () {
    axios.get('/index_category').then(res => {
      console.log(res)
    })
  }
}
</script>
