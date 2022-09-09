/* Prompt: Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']

*/


function solution(str){
    let c = [];
    let d = 0;
    let e = 1;
    for (let i = 0; ; i++) {
        if (str[d]+str[e] == `${str[d]}undefined`) {
            c[i] = str[d]+'_';
            return c;
        }if (str[d] == undefined) {
            return c;
        }
        c[i] = str[d]+str[e];
        d+=2;
        e+=2;
        
    }
}