// TUESDAY 14.11- loop challenge , marks&switch, converter
// //create a variable button, attribute use square brackt, class . id #
// let btnSubmit = document.querySelector('[data-submit]')
// //create a function

// function displayMarks(){
//     //+ converts string to a number. remember value   can use get element by ID too instead of queryselector
// let marks= +document.querySelector('[data-marks]').value
// //Label's value
// let output= document.querySelector('[data-output]')
// //switch  data type on case and switch must be the same DATA TYPE// textcontent vs innerhtml vs innertext, 
// switch (true){
//     case marks<50 :
//         output.textContent=`Failed`;
//     break;
//     case marks<=59 :
//         output.textContent=`Passed`;
//     break;
//     case marks<=69 :
//         output.textContent=`C+`;
//     break;
//     case marks<=79:
//         output.textContent=`Distinction`;
//     break;
//     case marks<=89:
//         output.textContent=`B+`;
//     break;
//     case marks<=99:
//         output.textContent=`A`;
//     break;
//     case marks==100:
//         output.textContent=`A+`;
//     break;
//     default:
//         output.textContent=`You're a ghost`;
//     break;
        
// }
    
   
// }
// btnSubmit.addEventListener('click',displayMarks)



//dom manipulation

//14/11
//Loops: for loop, while loop, do while,foreach,for in , for off
//one statement dont need curly brackets

//debugger
//for (let i=10; i>=0;i--){
   // if (i%2==0){
     //   console.log(i) 
    // }
    // else
    // console.log(`${i} is an odd numbr`)
// shorter version on cam

//break= stop at that number
//continue=skip
// if (i==5){
//     break
// }

//ternary operator is condition t/f
//console.log(i%2==0 ? i : 0);


// let numbers= [12, 18, 11, 5, 8, 2]
// for (let i=0; i>=numbers.length; i++)
// console.log(numbers);


// THURSDAY 16.11

// pre and post increment
// let a=3
// console.log(a++);
// console.log(a);
// debugger
// for(let i=0 ;i<10; i++) {
//     console.log(i);
// }


//console.log(a);

// console.log(++a);
// continue
// for (let i=0;i<=10; i++){
//     if (i==5){
//         continue
//     }
//     console.log(i)
// }



//while loop

// let cnt= 0

// while(cnt<=10){
//     console.log(cnt);

// //if we dont have the code below its gonna produce an infinite loop
// cnt++;
// }

// //do while
// let cnt= 0
// do{
//     console.log(cnt);
//     cnt++
// }while(cnt<=10)

// //for loop
// let numbers= [12, 18, 11, 5, 8, 2]
// // for(let i=0;i<numbers.length;i++){
// //     console.log(`${numbers[i]}`)
// // }

// //for each ,shorter and cleaner to go through EACH element
// numbers.forEach((numbers,i)=>{
     
//      if (numbers%2==0){
//          console.log(numbers,i);
//      }

// })


//for in for in we're dealing with index
// for(let i in numbers){
//     console.log(i,numbers[i]);
// }


//for of
// for (let number of numbers)
//     {
//         console.log(number);
//     }

//let numbers= [12, 18, 12,11, 5, 18,2,8, 2]
//skips duplicates or eliminates them
// let unique=[]
// numbers.forEach((number)=>{
//     if(!unique.includes(number)){
//         unique.push(number)
//     }
// })
// console.log(unique);
//shorter code
//console.log(Array.from(new Set (numbers)));

//anonymous function or function expression
// let test =function(num1 , numn2){
//     return num1+num2
// }
// console.log(test(2,8));

// //or shorter version 
// (function(num1,num2){
//     console.log(num1+num2);
// })(3,4)

// let greeting =" Hello World ";
// let newA = Array.from(greeting)
// console.log(newA);
// // console.log(newA.slice(1,6).concat(newA.slice(7,12)));
// console.log(greeting.trim().split(""));

// let firstname = "Siseko"

// function text(){
// console.log("inside -> "+firstname);
// }
// text()
// function chang(){
//     firstname="Phinda"
//     console.log('inside2nd ' + firstname)
    
// }
// chang()
// console.log('outside ')

//variable is hoisted but function is not
// display('Siseko')
// let display = function(firstName) {
//     console.log(`Your name is ${firstName}`);
// }
// //display('Siseko')

//Q
// console.log(secondname);
// function test{
//     secondname="spiderman"
// }

// let nums = [1]

// nums.push(3,4)
// console.log(nums);


//recursive function function that calls itself and can get a loop
// function display(){
//     console.log("hi there");
//     display()
// }
// display()

//joels function error example
//change variable to glabal from local so we can increment 1by1 and change the --limit
// let cnt = 1
// function repeat(limit) {
//     if(cnt <= limit) {
//     console.log(cnt);
//     cnt++
//     repeat(limit)
// }
// }
// repeat(10)

//reference and UD error
// function display(){
//     let num1=9
//     console.log();
// }

// can create object by onject literal or Object create or newkeyword/constructor 
//literal object curly bracket
// let person={
//     firstname : 'joel',
//     lastname : 'Mukanya'
// }
// console.log(person);
// //object.create  can clone theis one
// console.log("object.create()");
// let smartphone = Object.create({
//    make : "samsung",
//    model: "A 51"
// })

// console.log(smartphone);
// console.log("new keyword | object constructor");
// let computer= new Object({
//     brand : "dell",
//     amount: 18000
// })
// console.log(computer);


//factory function
//camelCase00
// allow us to create and return an object
// function person(){
//     let data = {
//         firstname:'peter',
//         age:20
//     }
//     return data
// }

function person(firstName,lastname,age,hrs,rate){
    //creating and returning an object
    return{
        // name:firstName,
        // surname:lastname,
        // userAge :age,
        // useRate : rate
        firstName,lastname,age,hrs,rate
    }
}
let person1=person('Peter','Mukanya',3,60,500)
console.log(person1);
let person2=person('John','Mukanya',1,20,350)
console.log(person2);

//constructive function allows us to create an object.Then return this
//name of fuction must be uppercase
function Laptop(make,amount){
    this.make=make
    this.amount=amount
    // it does this(JS)==> return this
}

let laptop1= new Laptop ('HP',18000)
let laptop2= new Laptop('Dell',20000)
console.log(laptop1);
console.log(laptop2);
//check for DNA
console.log(laptop2 instanceof Laptop)



