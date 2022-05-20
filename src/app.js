const Koa = require('koa')
const app = new Koa()
const { APP_PORT } = require('./config/config.default')
app.use((ctx, next) => {
  ctx.body = 'api is comming'
})
app.listen(APP_PORT, () => {
  console.log(`◀◀◀http server is on http://127.0.0.1:${APP_PORT}`)
})


