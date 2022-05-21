const jwt = require('jsonwebtoken')
const { createUser, getUserInfo, updateById } = require('../service/use.service')
const { userRegisterErr, getUserInfoErr, changePasswordErr } = require('../constant/err.type')
const { JWT_SECRET } = require('../config/config.default')
class UserController {
  // 用户注册
  async register(ctx, next) {
    const { user_name, password } = ctx.request.body
    try {
      // 操作数据库
      const res = await createUser(user_name, password)
      // 返回数据
      ctx.body = {
        code: 0,
        message: '用户注册成功',
        result: res
      }
    }
    catch (e) {
      ctx.app.emit('error', userRegisterErr, ctx)
    }
  }

  // 用户登录
  async login(ctx, next) {
    const { user_name } = ctx.request.body
    let token
    try {
      const { password, ...res } = await getUserInfo({ user_name })
      token = jwt.sign(res, JWT_SECRET, { expiresIn: '12h' })
    }
    catch (e) {
      ctx.app.emit('error', getUserInfoErr, ctx)
    }
    ctx.body = {
      code: 0,
      message: '登录成功',
      result: {
        user_name,
        token
      }
    }
  }

  // 更新密码
  async changePassword(ctx, next) {
    console.log(ctx.state.user, '◀◀◀ctx.state.user')
    const { id } = ctx.state.user
    const { password } = ctx.request.body
    console.log(id, password, '◀◀◀id, password')
    const res = await updateById({ id, password })
    if (res) {
      ctx.body = {
        code: 0,
        message: '修改密码成功',
        result: null
      }
    }
    else {
      ctx.app.emit('error', changePasswordErr, ctx)
    }
  }
}

module.exports = new UserController()
