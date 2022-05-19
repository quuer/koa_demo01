const Koa = require('koa')
const app = new Koa()

app.use((ctx)=>{
  ctx.body='项目启动'
})
app.listen(3000, () => {
  console.log('服务器在 http://localhost:3000 启动')
})
