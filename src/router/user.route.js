const Router = require('koa-router')
const router = new Router({ prefix: '/users' })
const db = [
  { id: 1, name: '小王' },
  { id: 2, name: '小红' },
  { id: 3, name: '小明' },
  { id: 4, name: '小白' }
]
router.post('/', async (ctx, next) => {
  ctx.body = db
})

router.post('/all', async (ctx, next) => {
  ctx.body = JSON.stringify(ctx.request.body)
})

// router.get('/:name/:id', async (ctx, next) => {
//   console.log(ctx.params, '◀◀◀ctx.params')
// })

router.get('/', async (ctx, next) => {
  console.log(ctx.query, '◀◀◀ctx.query')
})

router.get('/:id/atricle/:aid', async (ctx, next) => {
  console.log(ctx, '◀◀◀ ctx.params')
  a
  const { id, aid } = ctx.params
  if (false) {
    ctx.body = '文章信息'
  }
  else {
    // return  ctx.app.emit('error', { code: 404, message: '请求参数错误' }, ctx)
    return ctx.throw(422, '参数格式不正确')
  }
})

module.exports = router
