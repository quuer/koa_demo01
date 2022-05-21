const bcrypt = require('bcryptjs')
const { getUserInfo } = require('../service/use.service')
const {
  userFormatError,
  userNotExits,
  getUserInfoErr,
  invalidUserPassword,
  userExits, emptyPasswordErr
} = require('../constant/err.type')

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
  const res = await getUserInfo({ user_name })
  try {
    if (res) {
      ctx.app.emit('error', userExits, ctx)
      return
    }
  }
  catch (e) {
    ctx.app.emit('error', getUserInfoErr, ctx)
    return
  }
  await next()
}

const cryptPassword = async (ctx, next) => {
  const { password } = ctx.request.body
  if (!password) {
    return ctx.app.emit('error', emptyPasswordErr, ctx)
  }
  const salt = bcrypt.genSaltSync(10) // 加10次盐
  const hash = bcrypt.hashSync(password, salt) // hash保存了密文
  ctx.request.body.password = hash
  await next()
}

const verifyLogin = async (ctx, next) => {
  const { user_name, password } = ctx.request.body
  const res = await getUserInfo({ user_name })
  try {
    if (!res) {
      ctx.app.emit('error', userNotExits, ctx)
      return
    }
  }
  catch (e) {
    ctx.app.emit('error', getUserInfoErr, ctx)
    return
  }
  const isPasswordCorrect = bcrypt.compareSync(password, res.password)
  if (!isPasswordCorrect) {
    ctx.app.emit('error', invalidUserPassword, ctx)
    return
  }

  await next()
}

module.exports = {
  userValidator,
  verifyUser,
  cryptPassword,
  verifyLogin

}
