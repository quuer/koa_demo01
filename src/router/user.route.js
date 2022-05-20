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


module.exports = router
