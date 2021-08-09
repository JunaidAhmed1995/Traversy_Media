// const person = {
//   firstName: "junaid",
//   walk() {
//     console.log("walk is call");
//   },
//   talk() {
//     console.log("talk is call");
//   },
// };

// const targetProp = "wk";

// person.hasOwnProperty(targetProp)
//   ? typeof person[targetProp] === "function"
//     ? person[targetProp]()
//     : console.log(person[targetProp])
//   : console.log(`{${targetProp}} prop. doesn't belong to Person`);

//**************************************************************************************** */

// const jobs = [
//   { id: 1, isActive: true },
//   { id: 2, isActive: true },
//   { id: 3, isActive: false },
// ];

// const activeJobs = jobs.filter((job) => {
//   return job.isActive;
// });

// console.log(activeJobs);

//**************************************************************************************** */

// const address = {
//   street: 5,
//   city: "islamabad",
//   country: "pakistan",
// };

// //old way to get object properties:
// // const street = address.street;
// // const city = address.city;
// // const country = address.country;

// // console.log(street, city, country);

// //new method Object Destructuring
// const { street: myStreet, city: myCity, country: myCountry } = address;
// console.log(myStreet, myCity, myCountry);

// //! *************** OR **************

// const { street, city, country } = address;
// console.log(street, city, country);

//**************************************************************************************** */

// const firstArr = [1, 2, 3];
// const secondArr = [4, 5, 6];

// const combinedArr = firstArr.concat(secondArr); //old way to combine two arrays
// console.log(combinedArr);

// const combinedArrUsingSpread = [...firstArr, ...secondArr, 7, 8, 9]; //new way to combine array's
// console.log(combinedArrUsingSpread);

// const firstObj = {
//   firstName: "junaid",
//   lastName: "ahmed",
// };

// const secondObj = {
//   age: 25,
//   gender: "male",
// };

// const person = { ...firstObj, ...secondObj, address: "naval anchorage" }; //using Spread, combine Objects
// console.log(person);

//**************************************************************************************** */

// class Person {
//   constructor(_name, age) {
//     this._name = _name;
//     this.age = age;
//   }

//   personName() {
//     return this._name;
//   }
// }

// const person = new Person("Junaid Ahmed", 25);
// console.log(person.personName());

//**************************************************************************************** */

// const nums = [5, 30, 6, 20, 70, 1, 3, 4];
// const str = ["ali", "bilal", "huzaifa", "zayyan", "carry", "dani"];

// const unexpectedSort = nums.sort(); //gives unexpected result
// console.log(unexpectedSort);

// const expectedSort = nums.sort((a, b) => a - b); //gives expected result
// console.log(expectedSort);

//**************************************************************************************** */

// const person = {
//   firstName: "Junaid",
//   lastName: "Ahmed",
//   age: 25,
// };

// let lookingProp = "";

// person.hasOwnProperty(lookingProp)
//   ? typeof person[lookingProp] === "number"
//     ? console.log("Person age is: ", person[lookingProp])
//     : lookingProp === "firstName"
//     ? console.log(`first: ${person[lookingProp]} ${person.lastName}`)
//     : console.log(`last: ${person[lookingProp]} ${person.lastName}`)
//   : console.log(`"${lookingProp}" Prop is not in Person`);

//**************************************************************************************** */

// const todayDateTime = new Date();
// console.log(todayDateTime);

// const currDate = new Date().toString().substring(0, 15);
// const currTime = new Date().toString().substring(16, 21);

// console.log(currDate);

// console.log(currTime);

//**************************************************************************************** */

// const hasDupNums = [1, 2, 7, 1, 8, 3, 2, 4, 5];
// const uniqNums = [];

// hasDupNums.forEach((num) => {
//   if (!uniqNums.includes(num)) {
//     uniqNums.push(num);
//   }
// });

// uniqNums.sort((a, b) => a - b);

// console.log(hasDupNums);
// console.log(uniqNums);

//**************************************************************************************** */

// const hasDupNums = [1, 2, 7, 1, 8, 3, 2, 4, 5];

// const removeDupNums = [...new Set(hasDupNums)];

// console.log(removeDupNums);

//**************************************************************************************** */

// const numArr = [1, 2, 3, 4, 5];

// const str = numArr.join(" ");
// console.log(str);

// const strArr = str.split(" ");
// console.log(strArr);

// const strToNumArr = strArr.map((strArrItem) => parseInt(strArrItem));
// console.log(strToNumArr);

//**************************************************************************************** */
// const str = "Junaid";
// console.log(str.split("").reverse().join(""));

//**************************************************************************************** */
// const nestedArr = [1, 2, [3, [4, 5, 6, [7, 8, 9]]], 10, [11, 12]];
// const flattenArr = nestedArr.flat(3);

// console.log(flattenArr);

//**************************************************************************************** */
