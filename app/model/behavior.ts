
module.exports = app => {
    const { INTEGER, STRING, DATE } = app.Sequelize;
    const Behavior = app.model.define('behavior', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true }, // 自增主键
        app_id: { type: STRING(100), allowNull: false }, // 系统 appId 标识
        env_id: STRING, // 操作环境 envId 
        url: { type: STRING, allowNull: false }, // 访问页面的 url

        duration: STRING, // 浏览时长
        name: STRING, // 用户行为 【用户点击、用户输入、路由跳转】
        // 用户点击
        target: STRING, // dom
        total_count: INTEGER, // 用户操作多少次
        // 用户输入
        keyword: STRING, // 关键字
        // 路由跳转
        call_url: STRING, // 调用页面的URL

        created_at: DATE,
        updated_at: DATE,
    },{
      // 禁止sequelize修改表名，默认会在后边添加一个字母s
      // freezeTableName: true,
      // 禁止自动添加时间戳相关属性
      timestamps: false,
    });
    Behavior.associate = function() {
        app.model.UserSystem.belongsTo(app.model.User, { foreignKey: 'user_id', targetKey: 'user_id' });
        app.model.UserSystem.belongsTo(app.model.System, { foreignKey: 'app_id', targetKey: 'app_id' });
    };
    return Behavior;
  };
  