const Koa = require('koa')
const app = new Koa()

app.use((ctx, next) => {
  console.log(1, '◀◀◀1')
  next()
  console.log(11, '◀◀◀11')
})
app.use((ctx, next) => {
  console.log(2, '◀◀◀1')
  next()
  console.log(22, '◀◀◀22')
})
app.use((ctx, next) => {
  console.log(3, '◀◀◀1')
  next()
  console.log(33, '◀◀◀33')
})
app.use((ctx, next) => {
  ctx.body = 'api服务启动'
  console.log(44, '◀◀◀44')
})
app.listen(3000, () => {
  console.log('服务器在 http://localhost:3000 启动')
})
