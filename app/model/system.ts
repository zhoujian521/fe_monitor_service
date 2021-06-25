
module.exports = app => {
    const { INTEGER, STRING, BOOLEAN } = app.Sequelize;
    const System = app.model.define('system', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true }, // 自增主键

      app_id: STRING, // 系统appId标识

      system_name: STRING, // 系统名称
      sdk_vesion: STRING, // sdk 版本

      system_type: INTEGER(10), // 项目类型 1:浏览器：web  2:微信小程序 ：wx
      custom_data: STRING, // 自定义数据 JSON 字符串
      not_monitor: STRING, // 不监听的资源或Endpoint 多个以,隔开
      trust_domain: STRING, // 信任域 多个以,隔开

      is_code_error: INTEGER(10), // 是否监听代码异常  0：是  1：否,
      is_page_performance: INTEGER(10), // 是否监听页面性能  0：是  1：否,  ==> 统计各种时间 ？？？
      is_res_error: INTEGER(10), // 是否监听资源异常  0：是  1：否,
      is_monitor_XHR: INTEGER(10), // 是否监听XHR  0：是  1：否,

      // 通知策略
      email: STRING, // 邮件名称
      mobile: STRING, // 邮件名称
      is_email_enable: BOOLEAN, // 是否启用邮件推送
      is_mobile_enable: BOOLEAN, // 是否启用短信推送
    });

    System.associate = function() {
      app.model.System.hasMany(app.model.UserSystem, { foreignKey: 'app_id' });
    };

    return System;
  };