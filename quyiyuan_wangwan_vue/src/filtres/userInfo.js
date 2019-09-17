//  vue定义全局过滤器
let MoneyFormat = value => {
  if (!value) return '0.00';
  /* 原来用的是Number(value).toFixed(0)，这样取整时有问题，例如0.51取整之后为1，感谢Nils指正 */
  var intPart = Math.floor(value); // 获取整数部分
  var intPartFormat = intPart.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,'); // 将整数部分逢三一断
  var floatPart = '.00'; // 预定义小数部分
  var value2Array = value.split('.');
  // =2表示数据有小数位
  if (value2Array.length === 2) {
    floatPart = value2Array[1].toString(); // 拿到小数部分
    if (floatPart.length === 1) { // 补0,实际上用不着
      return intPartFormat + '.' + floatPart + '0';
    } else {
      return intPartFormat + '.' + floatPart;
    }
  } else {
    return intPartFormat + floatPart;
  }
};

let timeFilter = function (value) {
  return value + '22';
};
export default { MoneyFormat, timeFilter };
