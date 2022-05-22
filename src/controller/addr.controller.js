const { add, findAll, update, remove, setDefaultAddr } = require('../service/addr.service')
const { addAddressErr, updateAddrErr, setDefaultAddrErr } = require('../constant/err.type')

class AddressController {

  // 添加地址
  async add(ctx, next) {
    const user_id = ctx.state.user.id
    const { consignee, address, phone, is_default = false } = ctx.request.body
    try {
      console.log({ user_id, consignee, address, phone, is_default }, '◀◀◀')
      const res = await add({ user_id, consignee, address, phone, is_default })
      if (res) {
        ctx.body = {
          code: 0,
          message: '添加地址成功',
          result: res
        }
      }
      else {
        return ctx.app.emit('error', addAddressErr, ctx)
      }
    }
    catch (e) {
      ctx.app.emit('error', addAddressErr, ctx)
    }
  }

  async findAll(ctx, next) {
    const user_id = ctx.state.user.id
    const res = await findAll(user_id)
    ctx.body = {
      code: 0,
      message: '查询地址列表成功',
      result: res
      // 或
      //   result: res.map(i => (
      //     {
      //       phone: i.phone,
      //       consignee: i.consignee,
      //       address: i.address,
      //       is_default: i.is_default
      //     }))
    }
  }

  async update(ctx, next) {
    const id = ctx.params.id
    const paramsObj = ctx.request.body
    const res = await update(id, paramsObj)
    console.log(res, '◀◀◀res')
    if (res) {
      ctx.body = {
        code: 0,
        message: '更新地址成功',
        result: null
      }
    }
    else {
      return ctx.app.emit('error', updateAddrErr, ctx)
    }
  }

  async remove(ctx, next) {
    const id = ctx.params.id
    const res = await remove(id)
    ctx.body = {
      code: 0,
      message: '删除地址成功',
      result: null
    }
  }

  async setDefaultAddr(ctx, next) {
    const id = ctx.params.id
    const user_id = ctx.state.user.id
    const res = await setDefaultAddr(id, user_id)
    if (res) {
      ctx.body = {
        code: 0,
        message: '设置默认地址成功',
        result: null
      }
    }
    else {
      return ctx.app.emit('error', setDefaultAddrErr, ctx)
    }
  }
}

module.exports = new AddressController()
