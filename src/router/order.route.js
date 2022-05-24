const Router = require('koa-router')
const { auth } = require('../middleware/auth.middleware')
const router = new Router({ prefix: '/api/orders' })
const { add, findAll, update } = require('../controller/orders.controller')
const { validator } = require('../middleware/orders.middleware')

// 添加订单时
router.post('/', auth, validator({
  goods_info: { type: 'string', required: true },
  address_id: { type: 'int', required: true },
  total: { type: 'string', required: true }
}), add)

// 获取订单列表
router.get('/', findAll)

// 修改订单状态
router.patch('/:id', auth, validator({
  status: { type: 'number', required: true }
}), update)

module.exports = router
