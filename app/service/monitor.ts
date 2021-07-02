import { Service } from "egg";
export default class MonitorService extends Service {
  public async addUser(params: any) {
    const { ctx } = this;
    const user = await ctx.model.User.create(params);
    return user;
  }
  public async addProject(params: any) {
    const { ctx } = this;
    const project = await ctx.model.Project.create(params);
    return project;
  }
  public async addUserProject(params: any) {
    const { ctx } = this;
    const userProject = await ctx.model.UserProject.create(params);
    return userProject;
  }

  public async getProjects(params: any) {
    const { ctx, app } = this;
    const array = await ctx.model.User.findAll({
      include: app.model.Project, 
      where: params,
      order: [["created_at", "DESC"]],
    });
    return array;
  }

  public async addWebResStatistic(params: any) {
    const { ctx } = this;
    const userProject = await ctx.model.WebResStatistic.create(params);
    return userProject;
  }

  public async addLogDetail(params: any) {
    const { ctx } = this;
    const userProject = await ctx.model.StatisticsDetail.create(params);
    return userProject;
  }

  public async getWebResStatistics(params: any) {
    const { ctx, app } = this;
    const { condition } = params;
    let { limit, offset } = params;
    limit = Number(limit);
    offset = Number(offset);
    const array = await ctx.model.WebResStatistic.findAll({
      include: app.model.StatisticsDetail,
      where: condition,
      order: [["created_at", "DESC"]],
      limit,
      offset,
    });
    return array;
  }

  public async addCustomData(params: any) {
    const { ctx } = this;
    const customData = await ctx.model.CustomData.create(params);
    return customData;
  }

  public async getProject(params: any) {
    const { ctx, app } = this;
    const array = await ctx.model.Project.findAll({
      include: app.model.CustomData, 
      // include: [
      //   { model: app.model.CustomData, attributes: [['capital', 'capital']], as: 'cusDatas' },
      // ], 
      where: params,
      order: [["created_at", "DESC"]],
    });
    return array;
  }
}
