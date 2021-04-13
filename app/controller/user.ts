import { Controller } from 'egg';

export default class UserController extends Controller {

  //   public async addUser() {}

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
