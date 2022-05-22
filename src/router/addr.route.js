const Router = require('koa-router')
const { auth } = require('../middleware/auth.middleware')
const { add, findAll, update, remove, setDefaultAddr } = require('../controller/addr.controller')
const { validator } = require('../middleware/addr.middleware')
const router = new Router({ prefix: '/address' })

// 新增地址
router.post('/', auth, validator({
  consignee: { type: 'string', required: true },
  phone: { type: 'string', format: /^1[3456789]\d{9}$/g },
  address: { type: 'string', required: true }
}), add)

// 获取地址列表
router.get('/', auth, findAll)

// 更新地址
router.put('/:id', auth, validator(
  {
    consignee: { type: 'string', required: true },
    phone: { type: 'string', format: /^1[3456789]\d{9}$/ },
    address: { type: 'string', required: true }
  }
), update)

// 删除地址
router.delete('/:id', auth, remove)

// 设置默认地址
router.post('/setDefaultAddr/:id', auth, setDefaultAddr)

module.exports = router
