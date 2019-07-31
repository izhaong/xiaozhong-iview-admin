var express = require('express')
var router = express.Router()
const jwt = require('jsonwebtoken')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource')
})

router.get('/getUserInfo', function (req, res, next) { // 登录请求
  res.send('success')
})

router.get('/authorization', (req, res, next) => { //  获取验证请求
  const userName = req.userName // 从app.js中拿到userName
  res.send({
    code: 200,
    mes: 'success',
    data: {
      token: jwt.sign({
        name: userName
      }, 'abcd', { // 重新生成一个新的Token, 返回给前端
        expiresIn: '1d'
      }),
      rules: {
        page: {
          home: true,
          home_index: true,
          about: true,
          argu: true,
          count_to: true,
          menu_page: true,
          upload: true,
          form: true,
          folder_tree: true,
          table_page: true,
          render_page: true,
          split_pane: true,
          parent: true,
          child: true,
          named_view: true,
          store: true,
          main: true
        },
        component: {
          edit_button: true,
          publish_button: false
        }
      }
    }
  })
})

module.exports = router
