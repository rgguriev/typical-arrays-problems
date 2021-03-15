exports.avg = function avg(array) {
  if (!Array.isArray(array) || array === 0 || array === undefined || array.length === 0) {
    return 0;
  }
  let sum = 0;
  let len = array.length;
  for (let i = 0; i < len; i++) {
    sum += array[i];
  }
  return sum / len;
}

exports.min = function min (array) {
  if (!Array.isArray(array) || array === 0 || array === undefined || array.length === 0) {
    return 0;
  }
  return Math.min.apply(Array, array);
  
}

exports.max = function max (array) {
  if (!Array.isArray(array) || array === 0 || array === undefined || array.length === 0) {
    return 0;
  }
  return Math.max.apply(Array, array);
  
}


