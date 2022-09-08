const fibonacci = function(a) {
    let x = 0;
    let y = 1;
    let z = 0;
    if (a < 0 || isNaN(a)) {
        return "OOPS";
    }
    for (let i = a; i > 1; i--) {
        z = x+y;
        x=y;
        y=z;
    }
    return z;
    
};

console.log(fibonacci("2"))