// const { uploadErr } = require('../constant/err.type')
class UserController {
  // 上传
  async upload(ctx, next) {
    try {
      ctx.body = '上传成功'
    }
    catch (e) {
      // ctx.app.emit('error', uploadErr, ctx)
    }
  }

}

module.exports = new UserController()
