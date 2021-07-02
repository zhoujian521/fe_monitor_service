import { Controller } from 'egg';


export default class UserController extends Controller {

  public async addUser() {
    const { ctx } = this;
    // 1: 校验参数
    // 1.1: 校验参数
    // 定义创建接口的请求参数规则
    const createRule = {
      login_name: { type: 'string', required: true },
      login_pwd:{ type: 'string', required: true },
    };
    ctx.validate(createRule);
    try {
      // 校验 `ctx.request.body` 是否符合我们预期的格式
      // 如果参数校验未通过，将会抛出一个 status = 422 的异常
      // ctx.validate(createRule, ctx.request.body);
      ctx.validate(createRule);
    } catch (error) {
      const { code, message } = error;
      console.log('validate error ==>' + code, message);
    }
    // 2: 组装参数
    const params = ctx.request.body;
    // 3: 调用 service 进行业务处理
    const result = await ctx.service.user.addUser(params);
    // 4: 设置响应内容和响应状态码
    ctx.body = {
      code: 0,
      msg: 'success',
      data: result,
    };
  }

  public async updateUser() {
    const { ctx } = this;
    ctx.body = await ctx.service.user.updateUser(ctx.request.body);
  }

  public async getUserInfo() {
    const { ctx } = this;
    const { id } = ctx.query;
    ctx.body = await ctx.service.user.getUserInfo(id);
  }

  async create() {
    const ctx = this.ctx;
    const rules = {
      login_name: { type: 'string', required: true },
      login_pwd:{ type: 'string', required: true },
    };
    ctx.validate(rules, ctx.request.body);

    const user = await ctx.service.user.create(ctx.request.body);
    ctx.body = { code: 0, msg: 'success', data: user };
  }

  async destroy() {
    const ctx = this.ctx;
    const rules = {
      id: { type: 'string', required: true },
    };
    ctx.validate(rules, ctx.request.body);

    const { id } = ctx.request.body;
    const result = await ctx.service.user.destroy({ id });
    ctx.body = { code: 0, msg: 'success', data: result };
  }

  async update() {
    const ctx = this.ctx;
    const rules = {
      id: { type: 'string', required: true },
      login_name: { type: 'string', required: false },
      login_pwd: { type: 'string', required: false },
    };
    ctx.validate(rules, ctx.request.body);

    const user = await ctx.service.user.update(ctx.request.body);
    ctx.body = { code: 0, msg: 'success', data: user };
  }

  async searchById() {
    const ctx = this.ctx;
    const rules = {
      id: { type: 'string', required: true },
    };
    ctx.validate(rules, ctx.query);
    const { id } = ctx.query;
    const data = await ctx.service.user.findByPk(id);
    ctx.body = { code: 0, msg: 'success', data };
  }

  async searchAll() {
    const { ctx } = this;
    const { helper } = ctx;
    const { limit, offset } = ctx.query;
    const query = { limit: helper.toInt(limit), offset: helper.toInt(offset) };
    const rules = {
      limit: { type: 'number', required: true },
      offset: { type: 'number', required: true },
    };
    ctx.validate(rules, query);

    const data = await ctx.service.user.index(query);
    ctx.body = { code: 0, msg: 'success', data };
  }
}
