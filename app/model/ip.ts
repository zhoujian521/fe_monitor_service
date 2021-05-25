
module.exports = app => {
    const { INTEGER, FLOAT, STRING } = app.Sequelize;
    const IP = app.model.define('ip', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true }, // 自增主键
        ip: { type: STRING, allowNull: false }, // ip
        country: STRING, // 国家
        province: STRING, // 省
        city: STRING, // 市
        latitude: FLOAT(10, 8), // 纬度
        longitude: FLOAT(10, 8), // 经度
    });
    return IP;
  };
  