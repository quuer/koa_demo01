const User = require('../model/user.model')

class UseService {
  // 创建一个新用户
  async createUser(user_name, password) {
    const res = await User.create({ user_name, password })
    return res.dataValues
  }

  // 查找一个用户
  async getUserInfo({ id, user_name, password, is_admin }) {
    const whereOpt = {}
    id && Object.assign(whereOpt, { id })
    user_name && Object.assign(whereOpt, { user_name })
    password && Object.assign(whereOpt, { password })
    is_admin && Object.assign(whereOpt, { is_admin })
    const res = await User.findOne({
      attributes: ['id', 'user_name', 'password', 'is_admin'],
      where: whereOpt
    })
    return res?.dataValues
  }

  // 验证密码
  async checkPassword({ id, user_name, password, is_admin }) {
    const whereOpt = {}
    id && Object.assign(whereOpt, { id })
    user_name && Object.assign(whereOpt, { user_name })
    password && Object.assign(whereOpt, { password })
    is_admin && Object.assign(whereOpt, { is_admin })
    const res = await User.findOne({
      attributes: ['id', 'user_name', 'password', 'is_admin'],
      where: whereOpt
    })
    return res?.dataValues
  }

  async updateById({ id, user_name, password, is_admin }) {
    const whereOpt = { id }
    const newUser = {}
    user_name && Object.assign(newUser, { user_name })
    password && Object.assign(newUser, { password })
    is_admin && Object.assign(newUser, { is_admin })
    const res = await User.update(newUser, { where: whereOpt })
    console.log(res, '◀◀◀res')
    return res[0]
  }

}

module.exports = new UseService()
