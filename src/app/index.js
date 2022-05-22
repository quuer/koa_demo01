const path = require('path')
const Koa = require('koa')
const koaBody = require('koa-body')
const koaStatic = require('koa-static')
const parameter = require('koa-parameter')
const app = new Koa()
const errHandler = require('./errHandler')
const router = require('../router/index')

console.log(path.resolve(__dirname, '../upload'))
app.use(parameter(app)) // also add a middleware to catch the error.

// 在路由处理之前注册koaBody
app.use(
  koaBody({
    // 配置文件上传参数
    multipart: true,
    parsedMethods: ['POST', 'PUT', 'PATCH', 'DELETE'],
    formidable: {
      uploadDir: path.resolve(__dirname, '../upload'),
      // uploadDir: './src/upload', 不推荐使用相对路径
      keepExtensions: true
    }
  }))
app.use(koaStatic(path.resolve(__dirname, '../upload')))
app.use(router.routes()).use(router.allowedMethods())

// 统一的错误处理
app.on('error', errHandler)
module.exports = app
