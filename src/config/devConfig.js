const devConfig = {
  environment: 'dev',
  options: {
    host: 'localhost',// 主机名
    username: 'root', // 用户名
    password: '1234',
    port: '3306', // 端口号，MySQL默认3306
    database: 'mall',// 使用哪个数据库
    dialect: 'mysql'
  }
}

module.exports = devConfig
