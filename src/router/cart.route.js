const Router = require('koa-router')
const { auth } = require('../middleware/auth.middleware')
const { validator } = require('../middleware/cart.middleware')
const { add, findAll, update, remove, selectAll } = require('../controller/cart.controller.js')
const router = new Router({ prefix: '/carts' })

// 添加进购物车
router.post('/add', auth, validator({ goods_id: { type: 'number', required: true } }), add)

// 获取购物车列表
router.get('/', auth, findAll)

// 更新购物车
router.patch('/:id', auth, validator({
  number: { type: 'number', required: false },
  selected: { type: 'boolean', required: false }
}), update)

// 删除购物车
router.delete('/', auth, validator({
  ids: { type: 'array', required: true }
}), remove)

// 全选与全不选购物车列表
router.post('/selectAll', auth, selectAll)



module.exports = router
