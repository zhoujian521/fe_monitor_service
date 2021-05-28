
module.exports = app => {
    const { INTEGER, STRING, DATE } = app.Sequelize;
    const System = app.model.define('system', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true }, // 自增主键
        app_id: { type: STRING(100), allowNull: false }, // 系统 appId 标识

        system_type: { type: INTEGER(10), allowNull: false }, // 1:浏览器：web  2:微信小程序 ：wx
        system_domain: STRING, // 系统 域名
        system_name: STRING, // 系统名称

        is_use: INTEGER, // 是否需要统计  0：是  1：否

        created_at: DATE,
        updated_at: DATE,
    },{
      // 禁止sequelize修改表名，默认会在后边添加一个字母s
      // freezeTableName: true,
      // 禁止自动添加时间戳相关属性
      timestamps: false,
    });
    return System;
  };