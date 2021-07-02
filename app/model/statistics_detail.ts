module.exports = (app) => {
    const { INTEGER, DATE } = app.Sequelize;
    const StatisticsDetail = app.model.define(
      "statistics_detail",
      {
        // 自增主键
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },

        // 统计 id
        statistic_id: INTEGER,
        // 项目 id
        details_id: INTEGER,
        // 日志发生时间 => 排序
        action_time: DATE,

        // 创建时间
        created_at: DATE,
        // 更新时间
        updated_at: DATE,
      },
      {
        // 禁止sequelize修改表名，默认会在后边添加一个字母s
        freezeTableName: true,
        // 禁止自动添加时间戳相关属性
        timestamps: false,
      }
    );
    return StatisticsDetail;
  };
  