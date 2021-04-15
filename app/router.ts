import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);
  router.get('/api/user/:id', controller.user.getUserInfo);
  router.post('/api/user/updateUser', controller.user.updateUser);
  router.post('/api/user/addUser', controller.user.addUser);


  router.post('/api/users/create', controller.user.create);
  router.post('/api/users/destroy', controller.user.destroy);
  router.post('/api/users/update', controller.user.update);
  router.get('/api/users/index', controller.user.index);
  router.get('/api/users/findByPk', controller.user.show);

};
