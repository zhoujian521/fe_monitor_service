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
  router.get('/api/users/findByPk', controller.user.searchById);
  router.get('/api/users/index', controller.user.searchAll);

  router.post('/api/monitor/addUser', controller.monitor.addUser);
  router.post('/api/monitor/addProject', controller.monitor.addProject);
  router.post('/api/monitor/addUserProject', controller.monitor.addUserProject);
  router.get('/api/monitor/getProjects', controller.monitor.getProjects);
  router.post('/api/monitor/addWebResStatistic', controller.monitor.addWebResStatistic);
  router.post('/api/monitor/addLogDetail', controller.monitor.addLogDetail);
  router.get('/api/monitor/getWebResStatistics', controller.monitor.getWebResStatistics);
  router.post('/api/monitor/addCustomData', controller.monitor.addCustomData);
  router.get('/api/monitor/getProject', controller.monitor.getProject);
  
};
