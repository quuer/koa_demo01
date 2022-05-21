const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../config/config.default')
const { tokenExpiredErr, invalidTokenErr, hasNoAdminPermission } = require('../constant/err.type')

const auth = async (ctx, next) => {
  const { authorization } = ctx.request.header
  const token = authorization.replace('Bearer ', '')
  try {
    // 返回的user中包含了jwt.sign中的payload内容，即包含{id,user_name,is_admin}
    const user = jwt.verify(token, JWT_SECRET)
    ctx.state.user = user
  }
  catch (err) {
    switch (err.name) {
      case 'TokenExpiredError':
        console.log('token过期', '◀◀◀"token过期"')
        return ctx.app.emit('error', tokenExpiredErr, ctx)
      case 'JsonWebTokenError':
        console.log('无效token', '◀◀◀"token过期"')
        return ctx.app.emit('error', invalidTokenErr, ctx)
    }
  }
  await next()
}

// 判断有管理员权限
const hasAdminPermission = async (ctx, next) => {
  const { is_admin } = ctx.state.user
  if (!is_admin) {
    console.log('用户无管理权限', '◀◀◀"用户无管理权限"')
    return ctx.app.emit('error', hasNoAdminPermission, ctx)
  }

  await next()

}

module.exports = {
  auth,
  hasAdminPermission
}
