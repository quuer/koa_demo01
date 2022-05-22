const { cartsFormatErr } = require('../constant/err.type')
const validator = (rules) => {
  return async (ctx, next) => {
    try {
      ctx.verifyParams(rules)
    }
    catch (e) {
      cartsFormatErr.result = e.errors
      return ctx.app.emit('error', cartsFormatErr, ctx)
    }
    await next()
  }
}

module.exports = {
  validator
}
