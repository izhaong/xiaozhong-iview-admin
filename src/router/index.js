import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
import {
  getToken,
  setToken
} from '@/lib/util'
import store from '@/store'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// const HAS_LOGINED = false
// 导航守卫
router.beforeEach((to, from, next) => {
  const token = getToken()
  if (token) {
    // 验证token是有效的s
    store.dispatch('authorization', token).then(() => {
      if (to.name === 'login') {
        next({
          name: 'home'
        })
      } else {
        next()
      }
    }).catch(() => {
      setToken('')
      next({
        name: 'login'
      })
    })
  } else {
    if (to.name === 'login') next()
    else {
      next({
        name: 'login'
      })
    }
  }
})
/**
 * 1. 导航被触发
 * 2. 在失活的组件(即将离开的页面组件) 里调用离开守卫 beforeRouteLeave
 * 3. 调用全局的前置守卫 beforeEach
 * 4. 在重用的组件里调用 beforeRouteUpdate
 * 5. 调用路由独享的守卫 beforeEnter
 * 6. 解析异步路由组件
 * 7. 在被激活的组件 ( 即将进入页面组件 ) 里调用beforeRouteEnter
 * 8. 调用全局的解析守卫 beforeResolve
 * 9. 导航被确认
 * 10. 调用全局的后置守卫 afterEach
 * 11. 触发DOM更新
 * 12. 用创建好的实例调用 beforeRouterEnter 守卫里传给 next
 */

export default router
