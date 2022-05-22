const Addr = require('../model/addr.model')

class AddressService {
  // 添加地址
  async add({ user_id, consignee, address, phone, is_default }) {
    console.log({ user_id, consignee, address, phone, is_default })
    const res = await Addr.create({
      user_id, consignee, address, phone, is_default,
      attributes: ['id', 'consignee', 'address', 'is_default']
    })
    console.log(res, '◀◀◀res')
    return res
  }

  async findAll(user_id) {
    const res = await Addr.findAll({
        attributes: ['id', 'address', 'phone', 'consignee', 'is_default'],
        where: { user_id }
      }
    )
    console.log(res, '◀◀◀res')
    return res
  }

  async update(id, paramsObj) {
    const res = await Addr.update(paramsObj, { where: { id } })
    return res[0] > 0
  }

  async remove(id) {
    const res = await Addr.destroy({ where: { id } })
    return res
  }

  async setDefaultAddr(id, user_id) {
    await Addr.update({ is_default: false }, { where: { user_id } })
    const res = await Addr.update({ is_default: true }, { where: { id } })
    console.log(res, '◀◀◀res')
    return res[0] > 0
  }
}

module.exports = new AddressService()
