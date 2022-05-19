// 1.导入koa
const Koa = require('koa')
// 注册koa-body中间件：解析请求体中的参数，挂载到ctx.request.body中
const KoaBody = require('koa-body')

// 2.实例化app对象
const app = new Koa()

// 使用koa-body插件
app.use(KoaBody())

// 3.导入抽离的路由
const userRoute = require('./router/user.route')

// 4.注册路由中间件
app.use(userRoute.routes()).use(userRoute.allowedMethods())

// 监听错误
app.on('error', (err, ctx) => {
  console.error(err, '◀◀◀err')
  ctx.body = {
    code: err.status || 500,
    message: err.message
  }
})
// 启动服务
app.listen(3000, () => {
    console.log('http server is on http://localhost:3000')
  }
)
