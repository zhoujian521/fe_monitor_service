import { Controller } from 'egg';


export default class UserController extends Controller {

  public async addUser() {
    const { ctx } = this;
    // 1: 校验参数
    // 1.1: 校验参数
    // 定义创建接口的请求参数规则
    const createRule = {
      id: { type: 'string', required: true },
      name: 'string',
      tab: { type: 'enum', values: [ 'enum1', 'enum2', 'enum3' ], required: false },
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
      // return;
    }
    // 2: 组装参数
    const { id: userId, name = '' } = ctx.request.body;
    const params = { userId, name };
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
    const { id, name = '' } = ctx.request.body;
    ctx.body = await ctx.service.user.updateUser({ id, name });
  }

  public async getUserInfo() {
    const { ctx } = this;
    const { id = 0 } = ctx.params;
    const { name = '' } = ctx.query;
    ctx.body = await ctx.service.user.getUserInfo(id, name);
  }


  async create() {
    const ctx = this.ctx;
    const rules = {
      name: { type: 'string', required: true },
      age: { type: 'string', required: true },
    };
    ctx.validate(rules, ctx.request.body);

    const { name, age } = ctx.request.body;
    const user = await ctx.service.user.create({ name, age });
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
      name: { type: 'string', required: false },
      age: { type: 'string', required: false },
    };
    ctx.validate(rules, ctx.request.body);

    const { id, name, age } = ctx.request.body;
    const user = await ctx.service.user.update({ id, name, age });
    ctx.body = { code: 0, msg: 'success', data: user };
  }

  async index() {
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

  async show() {
    const ctx = this.ctx;
    const rules = {
      id: { type: 'number', required: true },
    };
    ctx.validate(rules, ctx.query);

    const { id } = ctx.query;
    const data = await ctx.service.user.findByPk(id);
    ctx.body = { code: 0, msg: 'success', data };
  }
}
