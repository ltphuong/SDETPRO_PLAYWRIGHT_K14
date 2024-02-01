/**
 * Hoisting
 * let/const: NO hoisting
 * var: hosting
 */

console.log(myVariable);
var myVariable = 1;

/**
 * ==>
 * var myVariable;
 * console.log(myVariable);
 * myVariable = 1;
 */