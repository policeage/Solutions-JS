const leapYears = function(year) {
    if (year%400 === 0 || year%4 === 0 && year%100 !== 0) {
    return true;
    } else {
        return false;
    }
};
/*So the year has to be divisible by 4 and 400, but if it is divisible by 100, it isn't a leap year
    year/400 || year/4 && !year/100
    The idea is that I want to check if something can be divided by 400 first, and then check if it's divisible by 4 but not divisible by 100.
    I'm think of using a mod(%) to check if it returns 0, I'm not sure if there will be an instance of a number which can return 0 but not
    be what I want.
*/
// Do not edit below this line
module.exports = leapYears;
