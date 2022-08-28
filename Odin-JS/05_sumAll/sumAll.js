const sumAll = function(a,b) {
    //Sets the lowest and highest value based off the two received parameters
    let lowestValue = Math.min(a,b)
    let highestValue = Math.max(a,b)
    //Sets global variable to c which carries over each loops output and is also the final output
    let c;
    //Throws an error if a or b aren't a number and if a or c are negative
    if (typeof(a) !== "number" || typeof(b) !== "number" || a < 0 || b < 0) {
        return 'ERROR';
    } else {
    //Loop, if you know, you know
    for (let i = lowestValue; i <= highestValue; i++) {
        if (i==lowestValue) {
            ++i;
            c = lowestValue + i;
        } else {
            c = c + i;
        }
        } return c;
    }  
};


//Will need to find the sum of all numbers between two numbers
//Will need to find basically create a variable which contains the sum of all those numbers so something like, [a,z] will have to add a,b,c...z to equal final value.
//they mentioned loops... so i would be the difference between (a-b), i = difference; i == difference; i++, each time it iterates it will add to the next value...
//so the difference of 1-4 is 3, the code will have to say 1+2+3+4
//Found an issue with lowest value + i would just be 1+1+2+3, maybe I could just add the lowest value at the end? lmao
//if the lowestValue is 1, we want to add 2 to it, but then we want to add 3 to the result of 1+2=3
//Ahhh, so you would want the lowest value to = i, and then add it until i > highest value
//we need some way to have a sum always updated each pass, but the two variables also have to be changing... so then I'll just add another variable.
//so D = C = A+B, B = lowestValue(i++), while A = C, of the previous iteration
//After pulling out the scratch paper, I figured out A = LV, B = HV, therefore:
//First iteration A + (I+1) = C
//Intermediate iterations C + I = C
//Final Iteration C + I = FinalSum
//The way that it worked out was just increasing i on the first iteration so we get C
//and then each time we get C, we add it to the next iteration and make it = C
//Honestly, I just guessed that C = C + i would carry over the variable, so I'm a little pissed that worked.
//throw an error if not a number or if it's negative
// Do not edit below this line
module.exports = sumAll;
