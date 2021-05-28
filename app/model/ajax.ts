
module.exports = app => {
    const { INTEGER, STRING, DATE } = app.Sequelize;
    const Ajax = app.model.define('ajax', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true }, // 自增主键
      app_id: { type: STRING(100), allowNull: false }, // 系统 appId 标识
      env_id: STRING, // 操作环境 envId 
      url: { type: STRING, allowNull: false }, // 访问页面的 url

      fetch_url: { type: STRING, allowNull: false }, // 访问的ajaxUrl
      method: STRING, // 资源请求方式
      querydata: STRING, // 请求参数
      options: STRING, // 请求参数
      duration: INTEGER, // 响应时间 单位：ms

      created_at: DATE,
      updated_at: DATE,
    },{
      // 禁止sequelize修改表名，默认会在后边添加一个字母s
      // freezeTableName: true,
      // 禁止自动添加时间戳相关属性
      timestamps: false,
    });
    Ajax.associate = function() {
      app.model.UserSystem.belongsTo(app.model.System, { foreignKey: 'app_id', targetKey: 'app_id' });
      app.model.UserSystem.belongsTo(app.model.Environment, { foreignKey: 'env_id', targetKey: 'env_id' });
    };

    return Ajax;
  };