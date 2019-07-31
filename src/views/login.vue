<template>
  <div>
    <Input v-model="userName" placeholder="账号"></Input>
    <Input v-model="password" type="password" placeholder="密码"></Input>
    <Button type="primary" @click="handleSubmit">登录</Button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'login',
  data () {
    return {
      userName: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['login']),
    handleSubmit () {
      this.login({
        userName: this.userName,
        password: this.password
      }).then(res => {
        this.$router.push({
          name: 'home'
        })
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>
