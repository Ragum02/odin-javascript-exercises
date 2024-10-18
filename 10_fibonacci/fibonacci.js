const fibonacci = function(a) {
    let count = 0;


    if (typeof a !== 'number') {
        count = parseInt(a)
    } else {
        count = a
    }

    if (count < 0) return "OOPS";
    if (count == 0) return 0;


const fibo = [0,1];
for(let i = 2; i <= count; i++){
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}


return fibo[count];


};


// Do not edit below this line
module.exports = fibonacci;
