const Cart = require('../model/cart.model')
const Goods = require('../model/goods.model')
const { Op } = require('sequelize')

class CartService {
  // 添加商品进购物车
  async createOrupdate(user_id, goods_id) {
    const res = await Cart.findOne({
      where: {
        [Op.and]: {
          user_id,
          goods_id
        }
      }
    })
    console.log(res, '◀◀◀res')
    if (res) {
      // 若存有记录
      await res.increment('number')
      return await res.reload()
    }
    else {
      console.log(user_id, goods_id, '◀◀◀user_id')
      const res = await Cart.create({ user_id, goods_id, number: 1, selected: false })
      console.log(res, '◀◀◀res2')
      return res
    }
  }

  async findAll(page, pageSize, user_id) {
    const offset = (page * 1 - 1) * pageSize
    const limit = pageSize * 1
    console.log(offset, limit, user_id, '◀◀◀offset,limit')
    const { count, rows } = await Cart.findAndCountAll({
      attributes: ['id', 'number', 'selected'],
      offset,
      limit,
      include: {
        model: Goods,
        as: 'goods_info',
        attributes: ['id', 'goods_name', 'goods_price', 'goods_img']
      },
      where: {
        [Op.and]: {
          user_id
        }
      }
    })
    console.log(count, rows, '◀◀◀count,rows')
    return {
      page: page * 1,
      pageSize,
      totals: count,
      totalPages: Math.ceil(count / (pageSize * 1)),
      list: rows.map(i => i.dataValues)
    }
  }
}

module.exports = new CartService()
