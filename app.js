// // const keyword is also called immutable variable.best for tergeting selectors or html elements whom we don’t want to reassign the variable 
// //let can be reassigned and take new value. It creates a mutable variable.
// //let is the same as const in that both are blocked-scope. It means that the variable is only available within its scope
// // Arrow function
// const myFunc = name =>{
//     return `Hi ${name}`;
// }
// console.log(myFunc('Afshan'));

// //or 

// const myFunc = name => `Hi${name}`;
// console.log(myFunc('Afshan'));

// //Also, you can use Arrow function with map, filter, and reduce built-in functions.
// //ES5 code for map function
// const myArray = ["Afshan","shazia","Rabia",10];
// let array1= myArray.map(function(item){
//     return item;
// });
// console.log(array1);

// //ES6 code for map function
// const myArray = ["Afshan","shazia","Rabia",10];
// let arr1 = myArray.map(item => item);
// console.log(arr1);

// //Template Literals/Strings:these do not ignore the white spaces
// // We don’t have to use the plus (+) operator to concatenate strings, or when we want to use a variable inside a string.
// //ES5 syntax
// function myFunc(name,age){
//     return 'hi'+ name+'your age is'+age;
// }
// console.log(myFunc('Afshan',19));

// //ES6 syntax
// const myFunc = (name,age)=>{
//     return `Hi ${name}
//      your age is ${age}`;
// }
// console.log(myFunc('Afshan',19));

// //Array and object destructing
// //Destruction makes the assignment of the values of an array or object to the new variable easier.
// //ES5 syntax
// const contacts={
//     name:'Afshan',
//     age:19,
//     job:'Student'
// }
// let Name=contacts.name;
// let Age=contacts.age;
// let Job=contacts.job;
// console.log(Name);
// console.log(Age);
// console.log(Job);

// //ES6 syntax
// const contacts={
//     name:'Afshan',
//     age:19,
//     job:'Student'
// }
// //We always have to name the variable the same as the name of the property
// let{name,age,job}=contacts;
// /*But in case we want to rename the variable, we can use the colon : instead.
// let{name:myName,age,job}=contacts;
// console.log(myName);*/
// console.log(name);
// console.log(age);
// console.log(job);


// /*Note:For the array, we use the same syntax as the object. We have just to replace the curly brackets 
// with square brackets whereever we have have used.*/


// //Import and Export
// /*It is simple! export allows you to export a module to be used in another JavaScript component. 
// We use import to import that module to use it in our component.

// For example, we have two files. The first is named detailComponent.js and the second is named homeComponent.js.
// In detailComponent.js we are going to export the detail function.*/
// export default function detail(name,age){
//     return `Hi ${name} your age is ${age}`;
// }
// //And if we want to use this function in homeComponent.js, we will just use import
// import detail from './detailComponent'
// console.log(detail('Afshan',19));
// //If we want to import more than one module, we just put them within curly brackets.
// import {detail,eduaction,blogs} from './detailComponent'

// //Rest parameter and Spread operator: rest parameters are used to get arguments of array and return a new array
// const arr=['afshan',20,'Webdeveloper','hi','afshan','how are you?'];
// const [val1,val2,val3,... rest]=arr;
// const myFunc=(restOfArray)=>{
// return restOfArray.filter(item =>{return item}).join(" ");
// }
// console.log(myFunc(rest));

// //spread Operator
// /*The spread operator has the same syntax as the rest parameter, but the spread operator takes the Array
//  itself and not just the arguments.We can use the Spread parameter to get the values of an Array,
//   instead of using a for loop or any other method.*/
// const arr=['afshan',20,'Webdeveloper','hi','afshan','how are you?'];
// const Func=(...myArray)=>{
//     return myArray;
// }
// console.log(Func(arr));


// //Class
// class myClass{
//     constructor(name,age){
//     this.name=name;
//     this.age=age;
// }
// }
// const Detail = new myClass("Afshan",19);
// console.log(Detail.name)//  Afshan

// //Extends Keyword
// class myClass{
//     constructor(name,age){
//     this.name=name;
//     this.age=age;
// }
// sayHello(){
//     console.log(`Hi ${this.name} your age is ${this.age}`);
// }
// }
// // inherits myClass methids and properties
// class userProfile extends myClass{
//     username(){
//         console.log(this.name);
//     }
// }
// const obj = new userProfile('Afshan',19);
// obj.sayHello();
// obj.username();


// // //Let Keyword
// window.onload = function(){
//     var items= document.getElementsByTagName("li");
//     for(let x=0 ; x<items.length; x++){
//         items[x].onclick = function (){
//             console.log(x);
//         }
//     }
// }

// // Spread operator
// //example1.
// window.onload = function(){
//     var nums1=[1,2,3];
//     var nums2=[...nums1,4,5,6];
//     console.log(nums2)
// }
// //example2.
// window.onload = function(){
//     var nums=[1,2,3];
//     function addNums(a,b,c){
//         console.log(a+b+c);
//     }
//     addNums(...nums);
// }