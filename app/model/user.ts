
module.exports = app => {
  const { INTEGER, STRING } = app.Sequelize;
  const User = app.model.define('user', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true }, // 自增主键
    user_id: STRING(100), // 用户id

    email: STRING, // 邮箱
    mobile: STRING, // 手机号

    password_md5: STRING, // 用户密码
    token: STRING(100), // 用户秘钥

    account: STRING, // 账号
    nickname: STRING, // 昵称
    avatar_url: STRING, // 头像

    role: STRING(10), // 用户角色 1:开发者 2:管理员 3:普通用户
  });

  User.associate = function() {
    app.model.User.hasMany(app.model.UserSystem, { foreignKey: 'user_id' });
  };
  
  return User;
};


// {
//   禁止sequelize修改表名，默认会在后边添加一个字母s
//   freezeTableName: true,
//   禁止自动添加时间戳相关属性
//   timestamps: false,
// }