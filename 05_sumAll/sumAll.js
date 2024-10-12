const sumAll = function (min, max) {

  if (min > max){
    [min, max] = [max,min];
  }

  if(min < 0 || max < 0){
    return "ERROR";
  };

  if(!Number.isInteger(min) || !Number.isInteger(max)) {
    return "ERROR";
  };

  let sum = 0;
  for(let i = min; i <= max; i++){
    sum += i;
  }
return sum;
}
  module.exports = sumAll;
