module.exports = (app) => {
    const { INTEGER, STRING, DATE } = app.Sequelize;
    const CustomData = app.model.define(
        "custom_datas", {
            // 自增主键
            id: { type: INTEGER, primaryKey: true, autoIncrement: true },
            // 项目 id
            progect_id: INTEGER,
            // 自定义数据 key
            key: STRING,
            // 自定义数据 value
            value: STRING,

            // 创建时间
            created_at: DATE,
            // 更新时间
            updated_at: DATE,
        }, {
            // 禁止sequelize修改表名，默认会在后边添加一个字母s
            // freezeTableName: true,
            // 禁止自动添加时间戳相关属性
            timestamps: false,
        }
    );
    return CustomData;
};