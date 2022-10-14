/**
 * @param {string} s
 * @return {number}
 */
 const romans = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
};
var romanToInt = function(s) {
let total = 0;
for (let i = 0; i < s.length; i++) {
    if (s[i] == 'I' && s[i+1] == 'V') {
        total += 4;
        i++;
    } else if (s[i] == 'I' && s[i+1] == 'X') {
      total += 9;
      i++;
    } else if (s[i] == 'X' && s[i+1] == 'L') {
      total += 40;
      i++;
    } else if (s[i] == 'X' && s[i+1] == 'C') {
      total += 90;
      i++;
    } else if (s[i] == 'C' && s[i+1] == 'D') {
      total += 400;
      i++;
    } else if (s[i] == 'C' && s[i+1] == 'M') {
      total += 900;
      i++;
    } else {
      total += romans[s[i]];
    }
}
return total;        
};

//"MCMXCIV"
//1000+900+90+4
//3099

/* I def cheated on this one because I didn't know how to create
a hash table but additionally this whole thing was just wonky.

I did this problem almost 2 months ago now, if I had to do it again?

Forget about it, still too annoying.
*/