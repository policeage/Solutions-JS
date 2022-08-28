const ftoc = function(x) {
  return Number.parseFloat((x-32)*5/9).toFixed(1)/1
};

const ctof = function(y) {
  return Number.parseFloat((y*9/5)+32).toFixed(1)/1
};
/*
Pretty simple this time, just have to convert a number while rounding it to the first decimal place.
ez pz, found the .parseFloat.ToFixed to get the decimal, additionally I recalled that if you just applied
some math to a string, it'll turn it in to a number
*/
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
