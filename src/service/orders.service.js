const Order = require('../model/orders.model')

class OrdersService {
  // 添加地
  async add(params) {
    const { user_id, address_id, goods_info, total, order_no } = params
    const res = await Order.create(params)
    console.log(res, '◀◀◀res')
    return res.dataValues
  }

  async findAll({ page, pageSize, status }) {
    const offset = (page * 1 - 1) * pageSize
    const limit = pageSize * 1
    const { count, rows } = await Order.findAndCountAll({
      attributes: ['id', 'goods_info', 'total', 'status'],
      where: { status },
      offset,
      limit
    })
    return {
      page: offset,
      pageSize,
      totals: count,
      totalPages: Math.ceil(count / (pageSize * 1)),
      list: rows.map(i => i.dataValues)
    }
  }

  async update(id, status) {
    console.log(id, status, '◀◀◀id,status')
    const res = await Order.update({ status }, { where: { id } })
    if (res[0] > 0) {
      const res = await Order.findOne({
        attributes: ['id', 'goods_info', 'total', 'status'],
        where: { id }
      })
      console.log(res, '◀◀◀resone')
      return res
    }
  }
}

module.exports = new OrdersService()
