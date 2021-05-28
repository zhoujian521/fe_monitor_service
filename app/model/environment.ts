
module.exports = app => {
    const { INTEGER, STRING, DATE, FLOAT } = app.Sequelize;
    const Environment = app.model.define('environment', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true }, // 自增主键

        env_id: { type: STRING(100), allowNull: false }, // 操作环境 envId 
        app_id: { type: STRING(100), allowNull: false }, // 系统 appId 标识

        browser: STRING, // 浏览器名称
        borwser_version: STRING, // 浏览器版本
        system: STRING, // 操作系统
        system_version: STRING, // 系统版本

        ip: STRING, // 访问者IP
        county: STRING, // 国家
        province: STRING, // 省 
        city: STRING, // 市
        latitude: FLOAT(10, 8), // 纬度
        longitude: FLOAT(10, 8), // 经度

        created_at: DATE,
        updated_at: DATE,
    },{
      // 禁止sequelize修改表名，默认会在后边添加一个字母s
      // freezeTableName: true,
      // 禁止自动添加时间戳相关属性
      timestamps: false,
    });
    return Environment;
  };