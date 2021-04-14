import { Controller } from 'egg';

// 定义创建接口的请求参数规则
const createRule = {
  accesstoken: 'string',
  title: 'string',
  tab: { type: 'enum', values: [ 'ask', 'share', 'job' ], required: false },
  content: 'string',
};
export default class UserController extends Controller {

  public async addUser() {
    const { ctx } = this;
    // 1: 校验参数
    // 1.1: 校验参数
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
    // ......
  }

  //   public async deleteUser() {}

  public async updadteUser() {
    const { ctx } = this;
    const { id, name = '' } = ctx.request.body;
    ctx.body = await ctx.service.user.updadteUser({ id, name });
  }

  public async getUserInfo() {
    const { ctx } = this;
    const { id = 0 } = ctx.params;
    const { name = '' } = ctx.query;
    console.log('=============ctx=======================');
    console.log();
    console.log('=============ctx=======================');
    ctx.body = await ctx.service.user.getUserInfo(id, name);
  }


}
