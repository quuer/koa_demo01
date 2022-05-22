const { DataTypes } = require('sequelize')
const seq = require('../db/seq')

// 创建模型
const Addr = seq.define('mall_addr', {
    // 在这里定义模型属性,id会被自动创建
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    consignee: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    is_default: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
    }
  }
)
// 创建表：若表存在则删除表，否则创建
// Addr.sync({ force: true })

module.exports = Addr
