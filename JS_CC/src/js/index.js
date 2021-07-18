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

// const arrayUsingNew = new Array(1, 2, 3, 4, 5); //old method and it may cause Errors!
// console.log("Array using new Keyword -- arrayUsingNew: ", arrayUsingNew);

// const arrayWithoutNew = [1, 2, 3, 4, 5, 6, 7, 8]; //Recommended method to work with Arrays!
// console.log("Recommended way for Array -- arrayWithoutNew: ", arrayWithoutNew);

// const mixArray = ["apples", 11, "mangoes", 7, true]; //mixed arrays are allowed in JS!
// console.log("mixed Array -- mixArray: ", mixArray);

// const fruits = ["apples", "oranges", "pears"];

// console.log("fruits array have: ", fruits);
// console.log("fruits at index-1: ", fruits[1]);

// fruits.push("mangoes"); //add array element at the End!
// console.log("After push() fruits array have: ", fruits);

// fruits.unshift("bananas"); //add array element at the Beginning!
// console.log("After unshift() fruits array have: ", fruits);

// fruits.pop(); //remove array element at the End!
// console.log("After pop() fruits array have: ", fruits);

// fruits.shift(); //remove array element at the Beginning!
// console.log("After shift() fruits array have: ", fruits);

// console.log("is fruits an Array? ", Array.isArray(fruits)); //check whether Variable is an Array or Not!
// console.log(
//   "returns false bcz string is not an array! ",
//   Array.isArray("I'm a String")
// );

// console.log(
//   "Returns the index of specific array element: indexOf(pears) ",
//   fruits.indexOf("pears")
// ); //returns the index of specific array element

// console.log(
//   "Returns -1 if array element not found: ",
//   fruits.indexOf("Tomato")
// ); //returns -1 if array element not found

//*Objects -- have properties i.e.{key: value} pairs

// const person = {
//   firstName: "junaid",
//   lastName: "ahmed",
//   age: 25,
//   hobbies: ["movies", "sports", "music"], //array within Object!
//   address: {
//     street: "T-Road",
//     block: "G",
//     house: "41",
//   }, //object within Object!
// };

// console.log("Person Object have: ", person); //console the whole Object [i.e. person]
// console.log("Accessing firstName: ", person.firstName); //accessing firstName property of person
// console.log("Accessing Array Element within Object: ", person.hobbies[1]); //accessing hobbies[1]
// console.log("Accessing Object property within Object: ", person.address.street); //accessing street property

// const { firstName, LastName } = person; //Destructring Object i.e pulling out properties from Object
// console.log("After Destructring FirstName: ", firstName); //now we can access firstName directly

// const {
//   address: { street },
// } = person; //Destructring Object property within Object. [address is an embedded object]
// console.log("Destructring Embedded Object, street: ", street);

// person.email = "junaid@gmail.com"; //add new property [i.e. email] to person Object!
// console.log("after adding new property [email], Now person have: ", person);

// person.address.sector = "East"; //add new property to embedded Object in person object
// console.log(
//   "after adding new property in embedded Object (address), Now person have: ",
//   person
// );

// person.hobbies.push("gardening"); //add new array element to embedded array (hobbies) in person Object
// console.log(
//   "after adding new array element in hobbies, Now person have: ",
//   person
// );

//*Arrays of Objects
// const todos = [
//   {
//     id: 1,
//     text: "Take out trash",
//     isCompleted: true,
//   },
//   {
//     id: 2,
//     text: "Meeting with boss",
//     isCompleted: true,
//   },
//   {
//     id: 3,
//     text: "Dentist Appointment",
//     isCompleted: false,
//   },
// ];

// console.log("todos Array of Objects: ", todos);
// console.log(
//   "printing specific property at index-2 text: ",
//   todos[1].id,
//   todos[1].text
// );

// const todoJSON = JSON.stringify(todos); //convert into JSON Format! --- todos contain Array-Of-Objects
// console.log("after JSON.stringnify(): ", todoJSON);

//*Loops [for, for-of, while, forEach, map, filter]
// const todos = [
//   {
//     id: 1,
//     text: "Take out trash",
//     isCompleted: true,
//   },
//   {
//     id: 2,
//     text: "Meeting with boss",
//     isCompleted: true,
//   },
//   {
//     id: 3,
//     text: "Dentist Appointment",
//     isCompleted: false,
//   },
// ];

// for (let i = 0; i < 10; i++) {
//   console.log(`for loop number: ${i + 1}`);
// }

// let i = 0;
// while (i < 10) {
//   console.log(`while loop number: ${i + 1}`);
//   i++;
// }

// for (let i = 0; i < todos.length; i++) {
//   console.log(`for --> text: ${todos[i].text}`);
// } //simple for loop on Array of Objects

// for (let todo of todos) {
//   console.log(`for-of --> id: ${todo.id}`);
// } //for-of loop on Array of Objects

// todos.forEach((todo) => {
//   console.log(`forEach --> text: ${todo.text}`);
// }); //forEach on Array of Objects

// const todoIds = todos.map((todo) => {
//   return todo.id;
// }); //map returns new Array without effecting original Array
// console.log("map --> todoIds: ", todoIds); //contains only id property from todos Array
// console.log("is todoId Array? ", Array.isArray(todoIds));

// const todoCompleted = todos.filter((todo) => {
//   return todo.isCompleted === true; //return only those object whom isCompleted property value is true
// }); //filter returns new array having elements which passes the test condition
// console.log("filter --> todoCompleted: ", todoCompleted);

// const filterTextHavingTodoCompleted = todos
//   .filter((todo) => {
//     return todo.isCompleted === true;
//   }) //return those objects having isCompleted is equal to true
//   .map((todo) => {
//     return todo.text;
//   }); //then from filter it return only text property of those object who passes the filter test

// console.log(
//   "filter --> map --> Showing Only those text which isCompleted property value is true: ",
//   filterTextHavingTodoCompleted
// );

//*Conditions [if, if-else]
//(==) it matches only the values
//(===) it matches the values and data-type as well
//boolean operator [ or(||), and(&&), not(!) ]

const num = 10;
const num1 = 5;

if (num == 10) {
  console.log("num is 10 irrespective of data-type");
} //return true bcz num is equal to 10

if (num === 10) {
  console.log("num is 10 and data-type is also same");
} else {
  console.log("num is either not equals to 10 or data-type is different");
}

if (num === 15 || num1 === 5) {
  console.log("Either num is 10 or num1 is 5");
}
