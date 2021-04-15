const ATTRIBUTE = Symbol('Application#attribute');

export default {
  // 属性扩展
  get attribute() {
    if (!this[ATTRIBUTE]) {
      this[ATTRIBUTE] = 'context extend attribute';
    }
    return this[ATTRIBUTE];
  },
  // 方法扩展
  contextFun() {
    console.log('===>context extend fun===>');
  },
};
