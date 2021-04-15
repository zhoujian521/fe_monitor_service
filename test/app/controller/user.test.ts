import * as assert from 'assert';
import { app } from 'egg-mock/bootstrap';

describe('test/app/controller/user.test.ts', () => {
  // 测试执行顺序
  before(() => console.log('order 1'));
  before(() => console.log('order 2'));
  beforeEach(() => console.log('order 3'));
  afterEach(() => console.log('order 5'));
  after(() => console.log('order 6'));

  it('POST /api/users/create { name: \'刘贵成\', age: \'123\' }', async () => {
    console.log('order 4.1');
    // 参数异常
    await app.httpRequest().post('/api/users/create').expect(422);
    // 参数正常
    const result = await app.httpRequest().post('/api/users/create').send({ name: '刘贵成', age: '123' })
      .expect(200);
    const { code, data } = result.body;
    assert(code === 0);
    assert(data && data.name === '刘贵成');
  });

  it('POST /api/users/destroy { id: \'1000\' }', async () => {
    console.log('order 4.3');
    // 参数异常
    await app.httpRequest().post('/api/users/destroy').expect(422);
    // 参数正常
    const result = await app.httpRequest().post('/api/users/destroy').send({ id: '1000' })
      .expect(200);
    const { code = 0, msg = '', data = '' } = result.body;
    assert(code === 0);
    assert(msg === 'success');
    assert(data === '未找到该user');
  });

  it('GET /api/users/destroy { id: \'1000\' }', async () => {
    console.log('order 4.3');
    // 参数异常
    await app.httpRequest().post('/api/users/destroy').expect(422);
    // 参数正常
    const result = await app.httpRequest().post('/api/users/destroy').send({ id: '1000' })
      .expect(200);
    const { code = 0, msg = '', data = '' } = result.body;
    assert(code === 0);
    assert(msg === 'success');
    assert(data === '未找到该user');
  });
});
