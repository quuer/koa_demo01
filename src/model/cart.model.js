const { DataTypes } = require('sequelize')
const seq = require('../db/seq')
const Goods = require('./goods.model')
// 创建模型
const Cart = seq.define('mall_cart', {
    // 在这里定义模型属性,id会被自动创建
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    goods_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    number: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      allowNull: false,
      comment: '商品数量'
    },
    selected: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false
    }
  }
)
// 创建表：若表存在则删除表，否则创建
// Cart.sync({ force: true })

// 关联查询
Cart.belongsTo(Goods, {
  as: 'goods_info',
  foreignKey: 'goods_id'
})

module.exports = Cart
