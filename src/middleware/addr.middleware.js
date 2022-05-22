const { addAddressFormatErr } = require('../constant/err.type')
const validator = (rules) => {
  return async (ctx, next) => {
    try {
      ctx.verifyParams(rules)
    }
    catch (e) {
      addAddressFormatErr.result = e.errors
      return ctx.app.emit('error', addAddressFormatErr, ctx)
    }
    await next()
  }
}

module.exports = {
  validator
}
