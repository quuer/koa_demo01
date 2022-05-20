const Koa = require('koa')
const koaBody = require('koa-body')
const userRouter = require('../router/user.route')
const app = new Koa()
// 在路由处理之前注册koaBody
app.use(koaBody())
app.use(userRouter.routes()).use(userRouter.allowedMethods())

module.exports = app
