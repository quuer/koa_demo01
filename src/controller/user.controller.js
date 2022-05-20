const { createUser } = require('../service/use.service')
class UserController {
  // 用户注册
  async register(ctx, next) {
    // 1.获取数据
    const { user_name, password } = ctx.request.body
    // 2.操作数据库
    const res = await createUser(user_name, password)
    // 3.返回数据
    ctx.body = res
  }

  // 用户登录
  async login(ctx, next) {
    ctx.body = ctx.request.body
  }
}

module.exports = new UserController()
