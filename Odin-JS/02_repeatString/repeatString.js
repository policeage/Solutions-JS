const repeatString = function(string, num) {
    if (num == 0) {
        return string = "";
    } else if (num == 1) {
        return string;
    } else if (num < 0) {
        return string = 'ERROR';
    } else if (string === '') {
        return string = '';
    } else {
    let i = 2;
   for (i=2; i <= num; i++)
   string += 'hey';
    } return string;
}


//create a variable to contain an input string
// Do not edit below this line
module.exports = repeatString;
