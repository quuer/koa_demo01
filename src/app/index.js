const Koa = require('koa')
const koaBody = require('koa-body')
const app = new Koa()
const errHandler = require('./errHandler')
const userRouter = require('../router/user.route')

// 在路由处理之前注册koaBody
app.use(koaBody())
app.use(userRouter.routes()).use(userRouter.allowedMethods())

// 统一的错误处理
app.on('error', errHandler)
module.exports = app
