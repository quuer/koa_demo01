const { createUser, getUserInfo } = require('../service/use.service')
const { userRegisterErr } = require('../constant/err.type')
class UserController {
  // 用户注册
  async register(ctx, next) {
    const { user_name, password } = ctx.request.body
    try {
      // 操作数据库
      const res = await createUser(user_name, password)
      // 返回数据
      ctx.body = {
        status: 200,
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
    ctx.body = ctx.request.body
  }
}

module.exports = new UserController()
