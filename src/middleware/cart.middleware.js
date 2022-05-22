const { cartsFormatErr } = require('../constant/err.type')
const validator = async (ctx, next) => {
  try {
    ctx.verifyParams({
      goods_id: { type: 'number', required: true },
    })
  }
  catch (e) {
    cartsFormatErr.result = e.errors
    return ctx.app.emit('error', cartsFormatErr, ctx)
  }
  await next()
}

module.exports = {
  validator
}
