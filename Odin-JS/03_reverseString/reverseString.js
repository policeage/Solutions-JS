const reverseString = function(string) {
    let splitString = string.split("");
    let reversed = splitString.reverse();
    let join = reversed.join("");
    return join;
};

// Do not edit below this line
module.exports = reverseString;
