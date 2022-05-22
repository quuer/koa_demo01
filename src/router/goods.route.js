const Router = require('koa-router')
const router = new Router({ prefix: '/goods' })
const { upload, create, update, remove, restore,findAll } = require('../controller/goods.controller')
const { auth, hasAdminPermission } = require('../middleware/auth.middleware')
const { validator } = require('../middleware/goods.middleware')

// 上传
router.post('/upload', auth, hasAdminPermission, upload)

// 新增
router.post('/', auth, hasAdminPermission, validator, create)

// 更新
router.put('/:id', auth, hasAdminPermission, update)

// 硬删除
router.delete('/:id', auth, hasAdminPermission, remove)

// 软删除：下架
router.post('/:id/off', auth, hasAdminPermission, remove)

// 上架
router.post('/:id/on', auth, hasAdminPermission, restore)

// 商品列表
router.get('/',findAll)

module.exports = router
