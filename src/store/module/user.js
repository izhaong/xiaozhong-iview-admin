import {
  login,
  authorization
} from '@/api/user'
import {
  setToken
} from '@/lib/util'
const state = {
  userName: 'lison'
}
const getters = {
  //
}
const mutations = {
  //
}
const actions = {
  login ({
    commit
  }, {
    userName,
    password
  }) {
    return new Promise((resolve, reject) => {
      login({
        userName,
        password
      }).then(res => {
        // console.log(res) // {code: 200, mes: "success", data: {token: "eyJhbGciOiJIUz"}}
        if (res.code === 200 && res.data.token) {
          setToken(res.data.token)
          resolve()
        } else {
          reject(new Error('错误'))
        }
      }).catch(error => {
        reject(error)
      })
    })
  },
  authorization ({
    commit
  }, token) {
    return new Promise((resolve, reject) => {
      authorization().then(res => {
        if (parseInt(res.code) === 401) {
          reject(new Error('token error'))
        } else {
          setToken(res.data.token)
          resolve()
        }
      }).catch(error => {
        reject(error)
      })
    })
  },
  logout () {
    setToken('')
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
