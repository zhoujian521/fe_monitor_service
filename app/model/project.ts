module.exports = (app) => {
  const { INTEGER, STRING, TEXT, DATE, SMALLINT, BOOLEAN } = app.Sequelize;
  const Project = app.model.define(
    "project",
    {
      // 自增主键
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      // 项目 名称
      progect_name: STRING,
      // 项目类型 1:vue 2:react 3:wx
      progect_type: SMALLINT(1),

      // 不监听的资源或Endpoint => 多个以,隔开
      not_monitor: TEXT,
      // 信任域 => 多个以,隔开
      trust_domain: TEXT,
      // sdk 脚本
      sdk_script: TEXT,

      // 是否 监听 代码异常  1：是  0：否,
      is_code_error: BOOLEAN,
      // 是否 监听 页面性能  1：是  0：否,
      is_page_performance: BOOLEAN,
      // 是否 监听 资源异常  1：是  0：否,
      is_res_error: BOOLEAN,
      // 是否 监听 XHR  1：是  0：否,
      is_monitor_xhr: BOOLEAN,

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

  Project.associate = function () {
    app.model.Project.hasMany(app.model.CustomData, { foreignKey: 'progect_id' });
    app.model.Project.belongsToMany(app.model.User, {
      through: app.model.UserProject,
      foreignKey: "progect_id",
    });
  };
  return Project;
};
