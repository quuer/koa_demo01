const Koa = require('koa')
const koaBody = require('koa-body')
const app = new Koa()
const errHandler = require('./errHandler')
const router = require('../router/index')
// const userRouter = require('../router/user.route')
// const goodsRouter = require('../router/goods.route')

// 在路由处理之前注册koaBody
app.use(koaBody())
app.use(router.routes()).use(router.allowedMethods())
// app.use(userRouter.routes()).use(userRouter.allowedMethods())
// app.use(goodsRouter.routes()).use(goodsRouter.allowedMethods())

// 统一的错误处理
app.on('error', errHandler)
module.exports = app
