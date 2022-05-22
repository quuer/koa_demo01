const Goods = require('../model/goods.model')

class GoodsService {
  // 发布一个新商品
  async createGoods(goodsObj) {
    const res = await Goods.create(goodsObj)
    return res.dataValues
  }

  // 修改一个商品
  async updateGoods(id, goodsObj) {
    const res = await Goods.update(goodsObj, { where: { id } })
    return res[0]
  }

  // 下架一个商品
  async removeGoods(id) {
    const res = await Goods.destroy({ where: { id } })
    return res
  }

  // 上架一个商品
  async restoreGoods(id) {
    const res = await Goods.restore({ where: { id } })
    return res
  }

  // 查询商品列表
  async findAllGoods(page, pageSize) {
    const offset = (page - 1) * pageSize
    const limit = pageSize * 1
    const rows = await Goods.findAll({ offset, limit })
    console.log(rows, 'findAllGoods')
    return rows
  }

  // 查询商品列表总数
  async countGoods(page, pageSize) {
    const count = await Goods.count()
    return count
  }

  // 聚合查询
  async findAndCountAll(page, pageSize) {
    const offset = (page - 1) * pageSize
    console.log(typeof page, typeof pageSize, '◀◀◀typeof page,typeof pageSize')
    const limit = pageSize * 1
    console.log(offset, limit, '◀◀◀offset,limit')
    const { count, rows } = await Goods.findAndCountAll({ offset, limit })
    return {
      page: page * 1,
      pageSize: pageSize * 1,
      totals: count,
      totalPages: Math.ceil(count / (pageSize * 1)),
      list: rows.map(i => i.dataValues)
    }
  }
}

module.exports = new GoodsService()
