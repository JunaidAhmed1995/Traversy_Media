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

// const myString = "Hello World";

// console.log("length of myString is: ", myString.length); //length is a property

// console.log("toUpperCase myString: ", myString.toUpperCase()); //toUpperCase() is a method

// console.log("Sub-String of myString: ", myString.substring(0, 5)); //should return Hello
// console.log(
//   "Sub-String of myString + upperCase: ",
//   myString.substring(0, 5).toUpperCase()
// ); //add methods in series

// console.log("Split myString to an Array: ", myString.split(" ")); //split as space(" ") as a seperator

//*Arrays -- Variables that holds multiple values
//you can manipulate(add, delete, update items) Arrays with const.
//BUT Cannot do this once declare myArray[] with const. i.e. myArray = []; Error!

const arrayUsingNew = new Array(1, 2, 3, 4, 5); //old method and it may cause Errors!
console.log("Array using new Keyword -- arrayUsingNew: ", arrayUsingNew);

const arrayWithoutNew = [1, 2, 3, 4, 5, 6, 7, 8]; //Recommended method to work with Arrays!
console.log("Recommended way for Array -- arrayWithoutNew: ", arrayWithoutNew);

const mixArray = ["apples", 11, "mangoes", 7, true]; //mixed arrays are allowed in JS!
console.log("mixed Array -- mixArray: ", mixArray);

const fruits = ["apples", "oranges", "pears"];

console.log("fruits array have: ", fruits);
console.log("fruits at index-1: ", fruits[1]);

fruits.push("mangoes"); //add array element at the End!
console.log("After push() fruits array have: ", fruits);

fruits.unshift("bananas"); //add array element at the Beginning!
console.log("After unshift() fruits array have: ", fruits);

fruits.pop(); //remove array element at the End!
console.log("After pop() fruits array have: ", fruits);

fruits.shift(); //remove array element at the Beginning!
console.log("After shift() fruits array have: ", fruits);

console.log("is fruits an Array? ", Array.isArray(fruits)); //check whether Variable is an Array or Not!
console.log(
  "returns false bcz string is not an array! ",
  Array.isArray("I'm a String")
);

console.log(
  "Returns the index of specific array element: indexOf(pears) ",
  fruits.indexOf("pears")
); //returns the index of specific array element

console.log(
  "Returns -1 if array element not found: ",
  fruits.indexOf("Tomato")
); //returns -1 if array element not found
