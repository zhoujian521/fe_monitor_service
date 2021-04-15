export default {
  // 方法扩展
  toInt(str:string) {
    if (typeof str === 'number') return str;
    if (!str) return str;
    return parseInt(str, 10) || 0;
  },
};
