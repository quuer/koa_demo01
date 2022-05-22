const { addOrdersFormatErr } = require('../constant/err.type')
const validator = (rules) => {
  return async (ctx, next) => {
    try {
      ctx.verifyParams(rules)
    }
    catch (e) {
      addOrdersFormatErr.result = e.errors
      return ctx.app.emit('error', addOrdersFormatErr, ctx)
    }
    await next()
  }
}

module.exports = {
  validator
}
