const removeFromArray = function() {
    const args = Array.from(arguments);
    const secondArray = args.slice(1);
    const firstArray = arguments[0];
    let finishedArray = [];
    let difference = firstArray.filter(x => !secondArray.includes(x));
    return difference;

};

/* const removeFromArray = function() {
    const args = Array.from(arguments);
    const secondArray = args.slice(1);
    const firstArray = arguments[0];
    let finishedArray = [];
    let j = 0;
    let i = 0;
    let k = 0;
    for (i = 0; k < firstArray.length; i++) {
        if (firstArray[i] !== secondArray[j] && firstArray[i] !== finishedArray[i]) {
            finishedArray.push(firstArray[i]);
            i++;
        } else if (i == firstArray.length-1) {
            i = 0;
            j++;
        } else {
            k++
        }
    }return finishedArray;
}; */
/*     do {
        if (firstArray[i] !== secondArray[j] && firstArray[i] !== finishedArray[i]) {
            finishedArray.push(firstArray[i]);
            i++;
        } else if (i == firstArray.length-1) {
            i = 0;
            j++;
        } else {
            k++;
        }
    } while (k < firstArray.length);
    return finishedArray; */
//I should make a code which has two arguments, argument[0] will be the starting array, and the argument[1] will contain the array index to remove.
//I'll need to make sure both arguments are arrays
//I need to check if the first agument actually contains what the second argument wants to remove, for other tests I'll also need to check if there are additional
//arguments than just the initial two
//Create a loop which compares the full index of argument[0] against additional arguments, I'd have to create variables which will then slice the determined elements.
//Well, when I make the loop, I can just have it do the slice at the time but I'd have to be able to push the final variable out

//There is an issue when adding an array to an array, so when selecting an array within an array you have to use double [[]]

//I ended up cheating to win, honestly I just couldn't figure out how to properly iterate through two arrays
// Do not edit below this line
module.exports = removeFromArray;
