module.exports = (app) => {
  const { INTEGER, STRING, TEXT, DATE, SMALLINT } = app.Sequelize;
  const WebResStatistic = app.model.define(
    "web_res_statistic",
    {
      // 自增主键
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      // 项目 id
      progect_id: INTEGER,
      // 统计类型 1:最近1小时 2:最近4小时 3:日期
      statistics_type: INTEGER,

      // 完整的资源名称
      full_url: TEXT,
      // 资源加载类型 1:正常加载 2:跨域加载 3:加载失败 4:全部
      event_type: SMALLINT(1),
      // 最后出现
      last_action_time: STRING,
      // 发生次数
      action_count: INTEGER,
      // 影响用户数
      customer_count: INTEGER,
      // 时间-次数=>趋势图
      distribute_info: TEXT,

      // 统计数据
      call_url_list: TEXT, // 调用页面的URL

      os_list: TEXT, // 操作系统 多个以,隔开
      os_version_list: TEXT, // 系统版本 多个以,隔开
      browser_list: TEXT, // 浏览器/客户端类型 多个以,隔开
      browser_version_list: TEXT, // 浏览器版本/客户端版本 多个以,隔开
      resolution_list: TEXT, // 屏幕分辨率 多个以,隔开
      ip_list: TEXT, // 客户IP 多个以,隔开

      // 创建时间
      created_at: DATE,
      // 更新时间
      updated_at: DATE,
    },
    {
      // 禁止sequelize修改表名，默认会在后边添加一个字母s
      // freezeTableName: true,
      // 禁止自动添加时间戳相关属性
      timestamps: false,
    }
  );
  WebResStatistic.associate = function() {
    app.model.WebResStatistic.hasMany(app.model.StatisticsDetail, { foreignKey: 'statistic_id' });
  };

  return WebResStatistic;
};
