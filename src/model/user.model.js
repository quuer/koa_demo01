const { DataTypes } = require('sequelize')
const seq = require('../db/seq')

// 创建模型
const User = seq.define('mall_user', {
  // 在这里定义模型属性,id会被自动创建
  user_name: {
    type: DataTypes.STRING,
    // allowNull 默认为 true
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  is_admin: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: 0,
    comment: '是否为管理员，0：否（默认），1：是'
  }
})
// 创建表：若表存在则删除表，否则创建
// User.sync({ force: true })

module.exports = User
