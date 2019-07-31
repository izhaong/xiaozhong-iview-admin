<template>
  <div>
    <h1>parent page</h1>
    <Button type="primary" @click="getInfo">请求数据</Button>
  </div>
</template>
<script>
import { getUserInfo } from '@/api/user'
export default {
  methods: {
    getInfo () {
      getUserInfo().then(res => {
        console.log(res)
      })
    }
  }
}
</script>
