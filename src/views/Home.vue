<template>
  <div class="home">
    <!-- <b>{{ food }}</b> -->
    <img :src="imgSrc" alt>
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">跳转到parent</button>
    <button @click="handleClick('replace')">替换到parent</button>
    <button @click="getInfo">请求数据</button>
    <!-- <img :src="url"> -->
    <button @click="handleLogout">退出登录</button>
  </div>
</template>

<script>
import { getUserInfo } from '@/api/user'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'home',
  data () {
    return {
      url: '',
      bgColor: '',
      imgSrc: ''
    }
  },
  props: {
    food: {
      type: String,
      default: 'apple'
    }
  },
  computed: {
    ...mapState({
      rules: state => state.user.rules
    })
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      // console.log(vm)
    })
  },
  beforeRouteLeave (to, from, next) {
    // const leave = confirm('您确定要离开吗？')
    // if (leave) next()
    // else next(false)
    next()
  },
  mounted () {
    this.getInfo()
  },
  methods: {
    ...mapActions(['logout']),
    handleClick (type) {
      if (type === 'back') this.$router.back()
      else if (type === 'push') {
        this.$router.push({
          name: `argu`,
          params: {
            name: 'lison'
          }
        })
      } else if (type === 'replace') {
        this.$router.replace({
          name: 'parent'
        })
      }
    },
    getInfo () {
      getUserInfo({ userId: 21 }).then(res => {
        console.log('res: ', res)
        this.imgSrc = res.data.img
        // this.bgColor = res.color
      })
    },
    handleLogout () {
      this.logout()
      this.$router.push({
        name: 'login'
      })
    }
  }
}
</script>
<style lang="less" scoped>
.home {
  .ivu-col {
    height: 50px;
    margin-top: 10px;
    background: pink;
    background-clip: content-box;
  }
  .blue {
    .ivu-col {
      background: blue;
      background-clip: content-box;
    }
  }
}
</style>
