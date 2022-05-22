const Router = require('koa-router')
const { auth } = require('../middleware/auth.middleware')
const { validator } = require('../middleware/cart.middleware')
const { add, findAll, update } = require('../controller/cart.controller.js')
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

module.exports = router
