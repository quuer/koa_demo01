const { add, findAll, update } = require('../service/orders.service')
class OrdersController {

  // 添加地址
  async add(ctx, next) {
    const user_id = ctx.state.user.id
    const { address_id, goods_info, total } = ctx.request.body
    const order_no = 'koa_' + Date.now()
    const res = await add({ user_id, address_id, goods_info, total, order_no })
    ctx.body = {
      code: 0,
      message: '新增订单成功',
      result: null
    }
  }

  async findAll(ctx, next) {
    const { page = 1, pageSize = 1, status = 0 } = ctx.request.query
    const res = await findAll({ page, pageSize, status })
    ctx.body = {
      code: 0,
      message: '获取订单列表成功',
      result: res
    }
  }

  async update(ctx, next) {
    const { id } = ctx.request.params
    const { status } = ctx.request.body
    const res = await update(id, status)
    ctx.body = {
      code: 0,
      message: '更新订单状态成功',
      result: res
    }
  }
}

module.exports = new OrdersController()
