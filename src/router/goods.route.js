const Router = require('koa-router')
const router = new Router({ prefix: '/goods' })
const { upload } = require('../controller/goods.controller')
const { auth, hasAdminPermission } = require('../middleware/auth.middleware')

// 上传
router.post('/upload', auth, hasAdminPermission, upload)

// 新增
// router.post('/')

// 删除

// 更新

module.exports = router
