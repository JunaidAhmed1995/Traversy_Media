//Single Line COmment. Below is multi-line comment
/*
 * Primitive Data Types in JS
 ?1: undefined, 
 ?2: null, 
 ?3: boolean, 
 ?4: string, 
 ?5: number, 
 ?6: symbol, 
 ?7: object
 */

//*Variable's in JS
//There are three ways to declare variables in Java-Script
//?1: var
//?2: let
//?3: const
//var has global scope. let and const have block scope.
//var variables can re-assign and re-declare
//let variables can re-assign BUT cannot re-declare in the same scope
//const variables cannot re-assign or re-declare in the same scope

//*declaring a variable
//? Make a habit to close Java-Script statements with semi-colom (;)
//let myVariable; //use camelCase convention for variables

//*declaring and assigning a variable
//? [=] this is an assignment operator
//let myVariable = "i have assigned some value";

//*Escape Sequence in js
// let myString = "I am a \"double quoted\" string inside \"double quotes\"";
// console.log(myString);

//*double quoted string inside single quotes
//let myString = 'I am "double quoted" string inside \'single quotes\'';

//*string literals in JS
//let myString = `I am "double quoted" string with string literals template`;

//*other escape sequence characters in JS
// var myString = `firstline\n\t\\secondline\nthirdline`;
// console.log(myString);

//*String concatenation
// let myString = `first line. `;
// myString += `\nsecond line`;
// console.log(myString);

//*finding length of a string
// let firstName = "Junaid";
// console.log("length of first name: ", firstName.length);

//*strings are immutable
// let myString = "Jello World";
// myString[0] = "H"; //cannot change
// console.log(myString[0]); //gives J

//*Arrays method's in JS
// const myArray = [1,2,3,4,5];
// const nestedArray = [[1,2,3], [4,5,6]];
// push() add element at the end
// unshift() add element at the beginning
// pop() remove element at the end
// shift() remove element at the beginning

//*functions is JS
// function reUseAbleFunction() {
//   console.log("I appear on the console. Every time i'm called");
// }

// reUseAbleFunction(); //calling a function

// function functionWithArguments(a, b) {
//   console.log(`value of a: ${a} \nvalue of b: ${b}`);
// }

// functionWithArguments(5, 10);

//*local vs global variable
// let outerWear = "T-shirt"; //global variable

// function myOutFit() {
//   let outerWear = "Sweater"; //local variable
//   return outerWear;
// }

// console.log(`Local Outfit: ${myOutFit()}`); //sweater
// console.log(`Global Outfit: ${outerWear}`); //T-shirt

//*Switch in js

// let val = 1;
// let answer = "default";

// switch (val) {
//   case "bob":
//     answer = "Marley";
//     break;
//   case 42:
//     answer = "The Answer";
//     break;
//   case 1:
//     answer = "There is no #1";
//     break;
//   case 99:
//     answer = "Missed me by this much!";
//     break;
//   case 7:
//     answer = "Ate Nine";
//     break;
// }

// console.log(answer);

//*Objects in JS

// const myObject = {
//   "first name": "junaid",
//   lastName: "ahmed",
//   age: 25,
// };

// console.log(myObject.lastName); //accessing object property using Dot[.] Notation
// console.log(myObject["first name"]); //accessing object property using bracket[] notation
// myObject.age = 30; //change the property value of Object
// myObject.color = 'white'; //adding new property to Object
// delete myObject.age; //delete the age property from Object
// let lookupProperty = 'lastName'; //the property which we are looking for in Object
// let lookupPropVal = myObject[lookupProperty]; //access property through variable in myObject
// return myObject.hasOwnProperty(propertyName); //return either True or False

//*Manipulating complex objects
// const myMusic = [
//   //object-1
//   {
//     artist: {
//       first_name: "junaid",
//       last_name: "ahmed",
//       age: 25,
//     },
//     title: "Piano Man",
//     release_year: 2005,
//     formats: ["cd", "8t", "lp", "4k"],
//     gold: true,
//   },
//   //object-2
//   {
//     artist: {
//       first_name: "ali",
//       last_name: "zafar",
//       age: 45,
//     },
//     title: "singer",
//     release_year: 2002,
//     formats: ["cd", "4k", "8k"],
//     gold: false,
//   },
// ];
// console.log(myMusic[1].artist.first_name); //return first_name of Object-2
// console.log(myMusic[0].formats[3]); //return 3 element in formats array of Object-1

// const copyMyMusic = JSON.parse(JSON.stringify(myMusic)); //create a copy of Object in JS
// console.log(copyMyMusic);
