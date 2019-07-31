var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
const jwt = require('jsonwebtoken')

var indexRouter = require('./routes/index')
var usersRouter = require('./routes/users')
var dataRouter = require('./routes/data')

var app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({
  extended: false
}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// app.all('*', (req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*')
//   res.header('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type')
//   res.header('Access-Control-Allow-Methods','PUT,POST,GET,DELETE,OPTIONS')
//   next()
// })

const whiteListUrl = { // 白名单 不需要做校验的接口
  get: [],
  post: [
    '/index/login'
  ]
}

const hasOneOf = (str, arr) => {
  return arr.some(item => item.includes(str))
}

app.all('*', (req, res, next) => {
  let method = req.method.toLowerCase() // 获取当前请求方式
  let path = req.path // 获取当前请求路径
  if (whiteListUrl[method] && hasOneOf(path, whiteListUrl[method])) next() // 过滤 有些接口不需要做Token校验
  else { // 需要校验的接口
    const token = req.headers.authorization // 取到请求头中Token
    if (!token) res.status(401).send('there is no token, please login')
    else {
      jwt.verify(token, 'abcd', (error, decode) => { // jsonwebtoken第三方库校验Token
        if (error) {
          res.send({
            code: 401,
            mes: 'token error',
            data: {}
          })
        } else {
          req.userName = decode.name
          next()
        }
      })
    }
  }
})

app.use('/index', indexRouter)
app.use('/users', usersRouter)
app.use('/data', dataRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
