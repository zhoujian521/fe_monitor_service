
module.exports = app => {
    const { INTEGER, STRING, DATE } = app.Sequelize;
    const User = app.model.define('user', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true }, // 自增主键
        app_id: { type: STRING(100), allowNull: false }, // 系统 appId 标识
        env_id: STRING, // 操作环境 envId 
        url: { type: STRING, allowNull: false }, // 访问页面的 url

        full_url: { type: STRING, allowNull: false }, // 完整的资源名称
        name: STRING, // 资源名称
        type: STRING, // 资源类型
        method: STRING, // 资源请求方式
        options: STRING, // 请求参数
        duration: INTEGER, // 资源请求耗时

        created_at: DATE,
        updated_at: DATE,
    },{
      // 禁止sequelize修改表名，默认会在后边添加一个字母s
      // freezeTableName: true,
      // 禁止自动添加时间戳相关属性
      timestamps: false,
    });
    return User;
  };