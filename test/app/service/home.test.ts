import * as assert from 'assert';
import { Context } from 'egg';
import { app } from 'egg-mock/bootstrap';

describe('test/app/service/home.test.js', () => {
  let ctx: Context;

  before(async () => {
    ctx = app.mockContext();
  });

  it('sayHi', async () => {
    const result = await ctx.service.home.sayHi('egg');
    assert(result === 'hi, egg');
  });
});
