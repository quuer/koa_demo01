const { fileUploadErr } = require('../constant/err.type')
class UserController {
  // 上传
  async upload(ctx, next) {
    const { file } = ctx.request.files
    console.log(file, '◀◀◀file')
    if (file) {
      ctx.body = {
        code: 0,
        message: '上传成功',
        result: file,
      }
    }else{
      return ctx.app.emit('error',fileUploadErr,ctx)
    }
  }

}

module.exports = new UserController()
