
module.exports = app => {
    const { INTEGER, STRING, DATE } = app.Sequelize;
    const UserSystem = app.model.define('user_system', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true }, // 自增主键

        user_id: { type: STRING(100), allowNull: false }, // 应用所属用户 id
        app_id: { type: STRING(100), allowNull: false }, // 系统 appId 标识

        created_at: DATE,
        updated_at: DATE,
    },{
      // 禁止sequelize修改表名，默认会在后边添加一个字母s
      // freezeTableName: true,
      // 禁止自动添加时间戳相关属性
      timestamps: false,
    });
    UserSystem.associate = function() {
        app.model.UserSystem.belongsTo(app.model.User, { foreignKey: 'user_id', targetKey: 'user_id' });
        app.model.UserSystem.belongsTo(app.model.System, { foreignKey: 'app_id', targetKey: 'app_id' });
    };
    return UserSystem;
  };
  