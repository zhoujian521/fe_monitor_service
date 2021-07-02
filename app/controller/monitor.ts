import { Controller } from "egg";

export default class MonitorController extends Controller {
  public async addUser() {
    const { ctx } = this;
    const params = ctx.request.body;
    const result = await ctx.service.monitor.addUser(params);
    ctx.body = {
      code: 0,
      msg: "success",
      data: result,
    };
  }
  public async addProject() {
    const { ctx } = this;
    const params = ctx.request.body;
    const result = await ctx.service.monitor.addProject(params);
    ctx.body = {
      code: 0,
      msg: "success",
      data: result,
    };
  }

  public async addUserProject() {
    const { ctx } = this;
    const params = ctx.request.body;
    const result = await ctx.service.monitor.addUserProject(params);
    ctx.body = {
      code: 0,
      msg: "success",
      data: result,
    };
  }

  public async getProjects() {
    const { ctx } = this;
    const { id } = ctx.request.body;
    const result = await ctx.service.monitor.getProjects({ id });
    ctx.body = {
      code: 0,
      msg: "success",
      data: result,
    };
  }

  public async addWebResStatistic() {
    const { ctx } = this;
    const params = ctx.request.body;
    const result = await ctx.service.monitor.addWebResStatistic(params);
    ctx.body = {
      code: 0,
      msg: "success",
      data: result,
    };
  }

  public async addLogDetail() {
    const { ctx } = this;
    const params = ctx.request.body;
    const result = await ctx.service.monitor.addLogDetail(params);
    ctx.body = {
      code: 0,
      msg: "success",
      data: result,
    };
  }

  public async getWebResStatistics() {
    const { ctx } = this;
    const { progect_id = '1', statistics_type = '1', event_type = '1',  } = ctx.request.body;
    const {limit, offset} = ctx.request.body;
    const condition = {progect_id, statistics_type, event_type};
    const result = await ctx.service.monitor.getWebResStatistics({condition, limit, offset});
    ctx.body = {
      code: 0,
      msg: "success",
      data: result,
    };
  }

  public async addCustomData() {
    const { ctx } = this;
    const params = ctx.request.body;
    const result = await ctx.service.monitor.addCustomData(params);
    ctx.body = {
      code: 0,
      msg: "success",
      data: result,
    };
  }

  public async getProject() {
    const { ctx } = this;
    const params = ctx.request.body;
    const result = await ctx.service.monitor.getProject(params);
    ctx.body = {
      code: 0,
      msg: "success",
      data: result,
    };
  }
}
