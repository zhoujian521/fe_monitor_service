import * as assert from 'assert';
import { app } from 'egg-mock/bootstrap';

describe('get app extend attribute ', () => {
  it('get attribute', async () => {
    assert(app.attribute === 'app extend attribute');
  });
});
