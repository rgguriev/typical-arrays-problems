
exports.min = function min (array) {
  if (array === 0 || array === undefined || array.length === 0) {
    return 0;
  }
  return Math.min(...array);
  
}

exports.max = function max (array) {
  if (array === 0 || array === undefined || array.length === 0) {
    return 0;
  }
  return Math.max(...array);
  
}

exports.avg = function avg (array) {
  if (array === 0 || array === undefined || array.length === 0) {
    return 0;
  }
  let sum = 0;
  let len = array.length;
  for (let i = 0; i < len; i++) {
      sum += array[i];
  }
  let avg = sum / len;
  return avg;
}
