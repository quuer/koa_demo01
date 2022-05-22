const Router = require('koa-router')
const { auth } = require('../middleware/auth.middleware')
const { validator } = require('../middleware/cart.middleware')
const {add} =require('../controller/cart.controller.js')
const router = new Router({ prefix: '/carts' })

// 添加进购物车
router.post('/add', auth, validator, add)

module.exports = router
