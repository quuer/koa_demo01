const { DataTypes } = require('sequelize')
const seq = require('../db/seq')

// 创建模型
const Orders = seq.define('mall_order', {
    // 在这里定义模型属性,id会被自动创建
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    address_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    goods_info: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    total: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    order_no: {
      type: DataTypes.CHAR(17),
      allowNull: false
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  }
)
// 创建表：若表存在则删除表，否则创建
// Orders.sync({ force: true })

module.exports = Orders
