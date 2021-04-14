import { Service } from 'egg';
export default class user extends Service {
  // this.ctx.curl 发起网络调用。
  // this.ctx.service.otherService 调用其他 Service。
  // this.ctx.db 发起数据库调用等， db 可能是其他插件提前挂载到 app 上的模块。

  public async addUser(params:any) {
    console.log('===========经过复杂的处理=============');
    return params;
  }

  public async getUserInfo(id: string, name:string) {
    console.log('===========经过复杂的处理=============');
    const { ctx } = this;
    const url = 'https://hooks.slack.com/services/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';
    ctx.throw(400, '服务异常', { code: -1001 });
    const result = await ctx.curl(url, {
      method: 'POST',
      contentType: 'json',
      data: { text: 'Only test' },
    });
    return { id, name, result };
  }

  public async updateUser(params:any) {
    console.log('===========经过复杂的处理=============');
    return params;
  }

}
