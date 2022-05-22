const User = require('../model/user.model')

class CartService {
  // 创建一个新用户
  async createOrupdate(user_id,goods_id) {
    // const res = await User.create(user_id,goods_id)
    // return res.dataValues
    return {
      id: 1,
      user_id: 13,
      number: 1,
      selected: true
    }
  }

}

module.exports = new CartService()
