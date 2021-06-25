
module.exports = app => {
    const { INTEGER, STRING } = app.Sequelize;
    const UserSystem = app.model.define('user_system', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true }, // 自增主键

        user_id: STRING, // 用户id
        app_id: STRING, // 系统appid标识
    });
  
    UserSystem.associate = function() {
        app.model.UserSystem.belongsTo(app.model.User, { foreignKey: 'user_id', targetKey: 'user_id' });
        app.model.UserSystem.belongsTo(app.model.System, { foreignKey: 'app_id', targetKey: 'app_id' });
    }; 
    
    return UserSystem;
  };