import * as assert from 'assert';
import { Context } from 'egg';
import { app } from 'egg-mock/bootstrap';

describe('test/app/service/home.test.js', () => {
  let ctx: Context;

  before(async () => {
    ctx = app.mockContext();
  });

  it('create user', async () => {
    const params = { name: '刘老鬼', age: '111' };
    const user = await ctx.service.user.create(params);
    assert(user);
    assert(user.name === '刘老鬼');
  });

  it('destroy user', async () => {
    const params = { id: 1111111111 };
    const result = await ctx.service.user.destroy(params);
    assert(result === '未找到该user');
  });
});
