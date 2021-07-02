module.exports = (app) => {
  const { INTEGER, STRING, TEXT, DATE } = app.Sequelize;
  const User = app.model.define(
    "user",
    {
      // 自增主键
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      // 账号
      login_name: STRING,
      // 用户密码
      login_pwd: STRING,
      // 昵称
      nickname: STRING,
      // 头像
      avatar_url: TEXT,
      // 手机号
      mobile: STRING,
      // 邮箱
      email: STRING,
      // 创建时间
      created_at: DATE,
      // 更新时间
      updated_at: DATE,
    },
    {
      // 禁止sequelize修改表名，默认会在后边添加一个字母s
      // freezeTableName: true,
      // 禁止自动添加时间戳相关属性
      timestamps: false,
    }
  );

  User.associate = function () {
    app.model.User.belongsToMany(app.model.Project, {
      through: app.model.UserProject,
      foreignKey: "user_id",
    });
  };
  return User;
};
