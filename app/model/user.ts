
module.exports = app => {
  const { INTEGER, STRING } = app.Sequelize;
  const User = app.model.define('user', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true }, // 自增主键
    user_name: { type: STRING(100), allowNull: false }, // 用户名称
    pass_word: { type: STRING(30), allowNull: false }, // 用户密码
    system_ids: STRING(100), // 用户所拥有的系统Id
    is_use: INTEGER, // 是否禁用 0：正常  1：禁用
    level: INTEGER, // 用户等级（0：管理员，1：普通用户）
    token: { type: STRING(100), allowNull: false }, // 用户秘钥
    usertoken: { type: STRING(200), allowNull: false }, // 用户登录态秘钥
  },{
    // 禁止sequelize修改表名，默认会在后边添加一个字母s
    // freezeTableName: true,
    // 禁止自动添加时间戳相关属性
    timestamps: false,
  });
  return User;
};
