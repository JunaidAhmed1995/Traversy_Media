// console.log("hello world dude's");
// console.error("hey this is an errror");
// console.warn("hey this is warning");

//*let (you can re-assign values BUT not re-declared in the same block-scope)
// let age = 25;
// age = 45;
// console.log("using LET, age have: ", age);

//*const (you CANNOT re-asign or re-declared in the same block-scope)
// const luckyNumber = 7;
// console.log("using CONST, luckyNumber have: ", luckyNumber);

//*Primitive data-types of checking their type using typeof(variable-name);
// const firstName = "Junaid";
// const myAge = 25;
// const rating = 4.9;
// const isCool = true;
// const x = null;
// const y = undefined;
// let z; //this is also undefined bcz it doesn't contain any value

// console.log("Type-of variable firstName: ", typeof firstName);
// console.log("Type-of variable myAge: ", typeof myAge);
// console.log("Type-of variable rating: ", typeof rating);
// console.log("Type-of variable isCool: ", typeof isCool);
// console.log("Type-of variable x: ", typeof x);
// console.log("Type-of variable y: ", typeof y);
// console.log("Type-of variable z: ", typeof z);

//*String Concatenation
// const firstName = "Junaid";
// const age = 25;

// console.log("My Name is " + firstName + " and my Age is " + age); //older method

// console.log(`My First-Name is ${firstName} and my Age is ${age}`); //template string or template literals (ES6)

//*String Properties and Methods
//Keep in mind that Properties doesn't have paranthesis ().
//where-as methods should have paranthesis ().

const myString = "Hello World";

console.log("length of myString is: ", myString.length); //length is a property

console.log("toUpperCase myString: ", myString.toUpperCase()); //toUpperCase() is a method

console.log("Sub-String of myString: ", myString.substring(0, 5)); //should return Hello
console.log(
  "Sub-String of myString + upperCase: ",
  myString.substring(0, 5).toUpperCase()
); //add methods in series

console.log("Split myString to an Array: ", myString.split(" ")); //split as space(" ") as a seperator
