const sumAll = function (min, max) {

  

  if(min < 0 || max < 0){
    return "ERROR";
  };

  if(!Number.isInteger(min) || !Number.isInteger(max)) {
    return "ERROR";
  };
  module.exports = sumAll;
}