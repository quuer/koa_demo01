const { DataTypes } = require('sequelize')
const seq = require('../db/seq')

// 创建模型
const Goods = seq.define('mall_goods', {
    // 在这里定义模型属性,id会被自动创建
    goods_name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    goods_num: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: '商品数量'
    },
    goods_price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      comment: '商品价格'
    },
    goods_img: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    paranoid: true
  }
)
// 创建表：若表存在则删除表，否则创建
// Goods.sync({ force: true })

module.exports = Goods
