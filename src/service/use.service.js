const User = require('../model/user.model')

class UseService {
  // 创建一个新用户
  async createUser(user_name, password) {
    const res = await User.create({ user_name, password })
    return res.dataValues
  }

  // 查找一个用户
  async getUserInfo({ id, user_name, password, is_admin }) {
    console.log(user_name, '◀◀◀user_name')
    const whereOpt = {}
    id && Object.assign(whereOpt, { id })
    user_name && Object.assign(whereOpt, { user_name })
    password && Object.assign(whereOpt, { password })
    is_admin && Object.assign(whereOpt, { is_admin })
    const res = await User.findOne({
      attributes: ['id', 'user_name', 'password', 'is_admin'],
      where:whereOpt
    })
    return res?.dataValues
  }
}

module.exports = new UseService()
