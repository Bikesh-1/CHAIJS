// console.log(2>1);
// console.log(2<1);
// console.log(2>=1);
// console.log(2==1);
// console.log(2!=1);


// console.log("2">1);
// console.log("02">1);

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

// the reason is that an equality check == and comparisons < > >= <= are different things in JavaScript 
// comparisons convert null to a Number, treating it as 0. that's why(0) null>=0 is true and null> is false .

// console.log(undefined == 0);

// avoid this kind of comparison in your code. use strict equality === and !== instead of == and !=. it

//===

console.log("2" === 2);
