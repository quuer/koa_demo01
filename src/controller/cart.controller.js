const { createOrupdate } = require('../service/cart.service')
const { addCartErr } = require('../constant/err.type')

class CartController {

  // 添加商品进购物车
  async add(ctx, next) {
    try {
      const user_id = ctx.state.user.id
      const { goods_id } = ctx.request.body
      console.log(user_id, goods_id, '◀◀◀user_id, goods_id')
      const res = await createOrupdate(user_id, goods_id)
      ctx.body = {
        code: 0,
        message: '添加购物成功',
        result: res
      }
    }
    catch (e) {
      ctx.app.emit('error', addCartErr, ctx)
    }
  }

}

module.exports = new CartController()