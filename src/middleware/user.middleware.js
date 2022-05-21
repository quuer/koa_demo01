const { getUserInfo } = require('../service/use.service')
const { userFormatError, isUserExits, getUserInfoErr } = require('../constant/err.type')

const userValidator = async (ctx, next) => {
  const { user_name, password } = ctx.request.body
  if (!user_name || !password) {
    ctx.app.emit('error', userFormatError, ctx)
    return
  }
  await next()
}

const verifyUser = async (ctx, next) => {
  const { user_name } = ctx.request.body
  try {
    const res = await getUserInfo({ user_name })
    if (res) {
      ctx.app.emit('error', isUserExits, ctx)
      return
    }
  }
  catch (e) {
    console.log(e, '◀◀◀e')
    ctx.app.emit('error', getUserInfoErr, ctx)
    return
  }
  await next()

}

module.exports = {
  userValidator, verifyUser
}
