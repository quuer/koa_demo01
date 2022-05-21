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
}

module.exports = new GoodsService()
