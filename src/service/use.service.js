class UseService {
  async createUser(user_name, password) {
    // TODO 写入数据库
    return {
      message: '写入成功',
      success: true,
      result: { user_name, password }
    }
  }
}

module.exports = new UseService()
