const leapYears = function(year,rem) {
const isLeap = year % 4 === 0
const isLeapToo = year % 400 === 0;
const isCentury = year % 100 === 0;

if(isLeap && (isLeapToo || !isCentury)) {
    return true;
} else {
    return false;
}
};

// Do not edit below this line
module.exports = leapYears;
