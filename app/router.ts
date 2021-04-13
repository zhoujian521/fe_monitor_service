import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);
  router.get('/api/user/:id', controller.user.getUserInfo);
  router.post('/api/user/updateUser', controller.user.updadteUser);
};
