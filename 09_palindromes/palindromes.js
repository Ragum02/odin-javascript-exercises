const palindromes = function (str) {
const alphanum = "abcdefghijklmnopqrstuvwxyz0123456789"

const verif = str.toLowerCase().split("").filter(character => alphanum.includes(character)).join("");

const reversed = verif.split("").reverse().join("")
return reversed === verif;
};

// Do not edit below this line
module.exports = palindromes;
