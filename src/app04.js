const Koa = require('koa')
const app = new Koa()

app.use(async (ctx, next) => {
  ctx.message = 'aa'
  console.log(1, '◀◀◀1')
  await next()
  console.log(11, '◀◀◀11')
  ctx.body = ctx.message
})
app.use(async (ctx, next) => {
  ctx.message += 'bb'
  console.log(2, '◀◀◀2')
  await next()
  console.log(22, '◀◀◀22')
})
app.use(async (ctx, next) => {
  console.log(3, '◀◀◀3')
  const res = await Promise.resolve('cc')
  console.log(33, '◀◀◀3')
  ctx.message += res
})

app.listen(3000, () => {
  console.log('服务器在 http://localhost:3000 启动')
})
