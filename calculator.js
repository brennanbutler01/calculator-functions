// add
function add(a, b) {
    return a + b;
}
// subtract
function subtract (a,b) {
    return a-b;
}  
// sum array
function sum (array) {
 return array.reduce((a, b) => a+b, 0);  //zero to avoid error if no values - a+ b for each element (a, b // all elements in array 
                                            // to sum for each ;
}
//raise a to the b power 
function power (a, b) {
    return Math.pow(a,b); 
}
//factorial 
function factorial (a) {
    if (a === 0) { // if zero, factorial is 1.
        return 1;
    } 
    return a * factorial (a-1); //otherwise, return product of a * a-1 * a-2 * a-3 ...
}
