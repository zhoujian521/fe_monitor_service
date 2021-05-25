
module.exports = app => {
    const { INTEGER, DATE, STRING } = app.Sequelize;
    const System = app.model.define('system', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true }, // 自增主键
        system_domain: STRING, // 系统 域名
        system_name: STRING, // 系统名称
        app_id: STRING, // 系统appId标识
        type: STRING, // 浏览器：web  微信小程序 ：wx
        user_id: STRING, // 应用所属用户ID
        create_time: DATE, // 用户访问时间
        is_use: INTEGER, // 是否需要统计  0：是  1：否
        slow_page_time: INTEGER, // 页面加载页面阀值  单位：s
        slow_js_time: INTEGER, // js慢资源阀值 单位：s
        slow_css_time: INTEGER, // 慢加载css资源阀值  单位：S
        slow_img_time: INTEGER, // 慢图片加载资源阀值  单位:S
        slow_ajax_time: INTEGER, // AJAX加载阀值
        is_statisi_pages: INTEGER, // 是否统计页面性能信息  0：是   1：否
        is_statisi_ajax: INTEGER, // 是否统计页面Ajax性能资源 0：是  1：否
        is_statisi_resource: INTEGER, // 是否统计页面加载资源性能信息 0：是    1：否
        is_statisi_system: INTEGER, // 是否存储用户系统信息资源信息 0：是   1：否
        is_statisi_error: INTEGER, // 是否上报页面错误信息  0：是   1：否
        is_daily_use: INTEGER, // 是否发送日报  0：是  1：否
        daliy_list: STRING, // 日报列表
        is_highest_use: INTEGER, // 是否发送pv邮件  0：是  1：否
        highest_list: STRING, // 突破历史pv峰值时发送邮件列表
    });
    return System;
  };