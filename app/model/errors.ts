
module.exports = app => {
    const { INTEGER, STRING, DATE } = app.Sequelize;
    const Error = app.model.define('error', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true }, // 自增主键

        app_id: { type: STRING(100), allowNull: false }, // 系统 appId 标识
        env_id: { type: STRING(100), allowNull: false }, // 操作环境 envId 

        url: { type: STRING, allowNull: false }, // 访问页面的 url

        category: STRING, // 错误类型
        msg: STRING, // 错误信息
        // ajax
        fullurl: STRING, // 完整url
        status: STRING, // HTTP状态码
        method: STRING, // 资源请求方式
        querydata: STRING, // 请求参数
        options: STRING, // 请求参数
        // 资源请求
        target: STRING, // 资源类型
        resource_url: STRING, // 错误资源URL
        // creash
        col: STRING, // js错误列号
        line: STRING, // js错误行号

        created_at: DATE,
        updated_at: DATE,
    },{
      // 禁止sequelize修改表名，默认会在后边添加一个字母s
      // freezeTableName: true,
      // 禁止自动添加时间戳相关属性
      timestamps: false,
    });
    Error.associate = function() {
        app.model.UserSystem.belongsTo(app.model.System, { foreignKey: 'app_id', targetKey: 'app_id' });
        app.model.UserSystem.belongsTo(app.model.Environment, { foreignKey: 'env_id', targetKey: 'env_id' });
    };
    return Error;
  };