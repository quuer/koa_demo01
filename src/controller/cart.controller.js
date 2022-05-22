const { userRegisterErr } = require('../constant/err.type')
class CartController {

  // 添加商品进购物车
  async add(ctx, next) {
    try {
      // const res = await createCart(user_name, password)
      ctx.body = {
        code: 0,
        message: '添加购物成功',
        auth: ctx.state.user
      }
    }
    catch (e) {
      ctx.app.emit('error', userRegisterErr, ctx)
    }
  }

}

module.exports = new CartController()
