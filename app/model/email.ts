
module.exports = app => {
    const { INTEGER, DATE, STRING } = app.Sequelize;
    const Email = app.model.define('email', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true }, // 自增主键
        email: { type: STRING, allowNull: false }, // 用户名称
        name: STRING, // 用户名
        system_ids: STRING, // 用户所拥有的应用信息
        create_time: DATE, // 用户访问时间
    });
    return Email;
  };
  