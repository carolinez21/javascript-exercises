const leapYears = function(year) {
    //if divisible by 400 or divisible by 4 and !divisible by 100
    return year%400 == 0 || (year%4 == 0 && !(year%100 == 0));
};

// Do not edit below this line
module.exports = leapYears;
