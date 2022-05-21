const {
  fileUploadErr,
  publishGoodsErr,
  updateGoodsErr,
  invalidGoodsErr,
  removeGoodsErr
} = require('../constant/err.type')
const { createGoods, updateGoods, removeGoods,restoreGoods} = require('../service/goods.service')
class UserController {
  // 上传
  async upload(ctx, next) {
    const { file } = ctx.request.files
    console.log(file, '◀◀◀file')
    if (file) {
      ctx.body = {
        code: 0,
        message: '上传成功',
        result: file
      }
    }
    else {
      return ctx.app.emit('error', fileUploadErr, ctx)
    }
  }

  async create(ctx, next) {
    try {
      const res = await createGoods(ctx.request.body)
      // 返回数据
      ctx.body = {
        code: 0,
        message: '发布成功',
        result: res
      }
    }
    catch (e) {
      return ctx.app.emit('error', publishGoodsErr, ctx)
    }
  }

  async update(ctx, next) {
    try {
      const res = await updateGoods(ctx.params.id, ctx.request.body)
      console.log(res, '◀◀◀resx')
      if (res) {
        ctx.body = {
          code: 0,
          message: '商品修改成功',
          result: null
        }
      }
      else { // 比如修改的id不在库表id中
        return ctx.app.emit('error', invalidGoodsErr, ctx)
      }
    }
    catch (e) {
      return ctx.app.emit('error', updateGoodsErr, ctx)
    }
  }

  async remove(ctx, next) {
    try {
      const res = await removeGoods(ctx.params.id)
      if (res) {
        ctx.body = {
          code: 0,
          message: '商品下架成功',
          result: null
        }
      }
      else { // 比如删除的id不在库表id中
        return ctx.app.emit('error', invalidGoodsErr, ctx)
      }
    }
    catch (e) {
      return ctx.app.emit('error', removeGoodsErr, ctx)
    }
  }

  async restore(ctx, next) {
    try {
      const res = await restoreGoods(ctx.params.id)
      if (res) {
        ctx.body = {
          code: 0,
          message: '商品上架成功',
          result: null
        }
      }
      else { // 比如删除的id不在库表id中
        return ctx.app.emit('error', invalidGoodsErr, ctx)
      }
    }
    catch (e) {
      return ctx.app.emit('error', removeGoodsErr, ctx)
    }
  }

}

module.exports = new UserController()
