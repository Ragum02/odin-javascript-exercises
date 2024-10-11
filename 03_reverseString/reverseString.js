const reverseString = function(string) {
const tempArray = string.split("").reverse()
string = tempArray.join("");
return string;
};

// Do not edit below this line
module.exports = reverseString;
