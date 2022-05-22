const { createOrupdate, findAll, updateCarts, removeCarts, selectAllCarts } = require('../service/cart.service')
const {
  addCartErr,
  findAllCartErr,
  updateCartErr,
  updateCartParamsErr,
  removeCartsErr,
  selectAllCartErr
} = require('../constant/err.type')

class CartController {

  // 添加商品进购物车
  async add(ctx, next) {
    try {
      const user_id = ctx.state.user.id
      const { goods_id } = ctx.request.body
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

  // 获得购物车列表
  async findAll(ctx, next) {
    try {
      const { page = 0, pageSize = 10 } = ctx.request.query
      const user_id = ctx.state.user.id
      const res = await findAll(page, pageSize, user_id)
      ctx.body = {
        code: 0,
        message: '获取购物车列表成功',
        result: res
      }
    }
    catch (e) {
      ctx.app.emit('error', findAllCartErr, ctx)
    }
  }

  // 更新购物车
  async update(ctx, next) {
    try {
      const { id } = ctx.request.params
      const { number, selected } = ctx.request.body
      if (number === undefined && selected === undefined) {
        return ctx.app.emit('error', updateCartParamsErr, ctx)
      }
      const res = await updateCarts({ id, number, selected })
      if (res) {
        return ctx.body = {
          code: 0,
          message: '更新购物车成功'
        }
      }
      else {
        return ctx.app.emit('error', updateCartErr, ctx)
      }
    }
    catch (e) {
      return ctx.app.emit('error', updateCartErr, ctx)
    }

  }

  // 删除购物车
  async remove(ctx, next) {
    console.log(ctx.request.body, '◀◀◀ctx.request.body')
    const { ids } = ctx.request.body
    const res = await removeCarts(ids)
    if (res) {
      ctx.body = {
        code: 0,
        message: '删除成功',
        result: 1
      }
    }
    else {
      return ctx.app.emit('error', removeCartsErr, ctx)
    }
  }

  // 全选
  async selectAll(ctx, next) {
    const user_id = ctx.state.user.id
    const { is_selectedAll } = ctx.request.body
    const res = await selectAllCarts(user_id,is_selectedAll)
    if (res) {
      ctx.body = {
        code: 0,
        message: is_selectedAll?'全选成功':'全不选成功',
        res: 'ok'
      }
    }
    else {
      return ctx.app.emit('error', selectAllCartErr, ctx)
    }
  }
}

module.exports = new CartController()
