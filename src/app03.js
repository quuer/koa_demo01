const Koa = require('koa')
const app = new Koa()

app.use(async (ctx, next) => {
  if (ctx.request.method === 'GET') {
    console.log('get', '◀◀◀"get"')
    if (ctx.request.url === '/index')
      console.log(3, '◀◀◀3')
    console.log('◀◀◀')
    ctx.response.body = '◀◀◀'
  }
  else {
    console.log('post', '◀◀◀"post"')
  }
  await next()
})

app.listen(3000, () => {
    console.log('http server is on http://localhost:3000')
  }
)
