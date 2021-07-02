import { Service } from 'egg';
export default class UserService extends Service {
  // this.ctx.curl 发起网络调用。
  // this.ctx.service.otherService 调用其他 Service。
  // this.ctx.db 发起数据库调用等， db 可能是其他插件提前挂载到 app 上的模块。

  public async addUser(params:any) {
    const { ctx } = this;
    const user = await ctx.model.User.create(params);
    return user;
  }

  public async getUserInfo(id: string) {
    console.log('===========经过复杂的处理=============');
    const { ctx } = this;
    const url = 'https://hooks.slack.com/services/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';
    // ctx.throw(400, '服务异常', { code: -1001 });
    const user = await ctx.model.User.findByPk(id);
    if (!user) {
      return '未找到该user';
    }

    const result = await ctx.curl(url, {
      method: 'POST',
      contentType: 'json',
      data: { text: 'Only test' },
    });
    return { user, result };
  }

  public async updateUser(params:any) {
    const { app, ctx } = this;
    console.log('==========Application 属性扩展==============');
    console.log(app.attribute);
    console.log('==========Application 属性扩展==============');
    console.log('==========Application 方法扩展==============');
    app.appFun();
    console.log('==========Application 方法扩展==============');

    console.log('==========context 属性扩展==============');
    console.log(ctx.attribute);
    console.log('==========context 属性扩展==============');
    console.log('==========context 方法扩展==============');
    ctx.contextFun();
    console.log('==========context 方法扩展==============');
    console.log('===========经过复杂的处理=============');
    const { id, nickname = ''} = params;
    const user = await ctx.model.User.findByPk(id);
    if (!user) {
      return '未找到该user';
    }
    await user.update({ nickname });
    return user;
  }

  async create(params) {
    const { ctx } = this;
    const user = await ctx.model.User.create(params);
    return user;
  }

  async destroy(params) {
    const ctx = this.ctx;
    const { id } = params;
    const user = await ctx.model.User.findByPk(id);
    if (!user) {
      return '未找到该user';
    }
    await user.destroy();
    return 'success';
  }

  async update(params) {
    const ctx = this.ctx;
    const { id, login_name, login_pwd } = params;
    const user = await ctx.model.User.findByPk(id);
    if (!user) {
      return '未找到该user';
    }
    await user.update({ login_name, login_pwd });
    return user;
  }
  
  async findByPk(id) {
    const { ctx } = this;
    const user = await ctx.model.User.findByPk(id);
    if (!user) {
      return '未找到该user';
    }
    return user;
  }

  async index(query) {
    const { ctx } = this;
    const result = await ctx.model.User.findAll(query);
    return result;
  }

}
