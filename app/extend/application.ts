const ATTRIBUTE = Symbol('Application#attribute');

export default {
  // 属性扩展
  get attribute() {
    if (!this[ATTRIBUTE]) {
      this[ATTRIBUTE] = 'app extend attribute';
    }
    return this[ATTRIBUTE];
  },
  // 方法扩展
  appFun() {
    console.log('===>app extend fun===>');
  },
};

