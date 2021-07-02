module.exports = (app) => {
  const { INTEGER, DATE, SMALLINT } = app.Sequelize;
  const UserProject = app.model.define(
    "user_project",
    {
      // 自增主键
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      // 用户 id
      user_id: INTEGER,
      // 项目 id
      progect_id: INTEGER,
      // 用户角色 1:管理员 2:普通用户
      role: SMALLINT(2),

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

  UserProject.associate = function () {
    app.model.UserProject.belongsTo(app.model.User, {
      foreignKey: "user_id",
      targetKey: "id",
    });
    app.model.UserProject.belongsTo(app.model.Project, {
      foreignKey: "progect_id",
      targetKey: "id",
    });
  };

  return UserProject;
};
