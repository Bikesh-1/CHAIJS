//strings 

const name = "Bikesh Kumar" 
const repoCount = 50

// console.log(name + " " + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String(`Bikesh Kumar`);


console.log(gameName[0]);
console.log(gameName.toUpperCase());

const newString = gameName.substring(0,4)
console.log(newString);


const anotherString =  gameName.slice(-8,4);

console.log(anotherString);


const newStrings = "     Bikesh        "

console.log(newStrings);
console.log(newStrings.trim());

