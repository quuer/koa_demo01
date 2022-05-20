const { Sequelize } = require('sequelize')
const {
  options: {
    host,
    username,
    password,
    database,
    dialect
  }
} = require('../config/devConfig')
const seq = new Sequelize(database, username, password, { host, dialect })

// 验证db是否连接成功
// seq.
//   authenticate().
//   then(() => {
//     console.log('db连接成功')
//   }).
//   catch((err) => {
//     console.error('db连接失败', err)
//   })

module.exports = seq
