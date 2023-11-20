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

// function person(firstName,lastname,age,hrs,rate){
//     //creating and returning an object
//     return{
//         // name:firstName,
//         // surname:lastname,
//         // userAge :age,
//         // useRate : rate
//         firstName,lastname,age,hrs,rate
//     }
// }
// let person1=person('Peter','Mukanya',3,60,500)
// console.log(person1);
// let person2=person('John','Mukanya',1,20,350)
// console.log(person2);

// //constructive function allows us to create an object.Then return this
// //name of fuction must be uppercase
// function Laptop(make,amount){
//     this.make=make
//     this.amount=amount
//     // it does this(JS)==> return this
// }

// let laptop1= new Laptop ('HP',18000)
// let laptop2= new Laptop('Dell',20000)
// console.log(laptop1);
// console.log(laptop2);

// //check for DNA -- instanceof
// console.log(laptop2 instanceof Laptop)

// //dynamic nature of an object-- able to update and add new property on object
// let person = {
//     firstname:'john',
//     lastname : 'bruce'
// }
// console.log(person);
// //change value
// person.firstname= 'Peter'
// // square notation
// //person['firstname']='Peter'
// console.log(person);
// //add a new property
// person.age=20
// console.log(person);


// //constructor pr0perty is the same as instance of
// function NewRecord(name){
//     this.name=name
// }
// let person1= new NewRecord('john')
// let person2= {name : 'henk'}
// console.log(person2);
// //constructor property
// console.log(person1.constructor=== NewRecord); //true
// //same as using instance of
// console.log(person1 instanceof NewRecord); //TRUE

// //functions are object
// let person= {
//     firstname: 'john',
//     lastname:'bruce',
//     fullname : function(){
//         //make use of this. NB
//         return `${this.firstname} ${this.lastname}`
//     }

// }
// console.log(person);
// console.log(person.fullname());

// let person={
//     firstname: 'john',
//     lastname:'bruce',
//     hrs: 120,
//     rate :500,
//     salary :function(){
//         return this.hrs*this.rate
//     }
// }
// console.log(person);
// console.log(person.salary());
// //return holds value for you so no need to log you can just do the below to call it like eventlistener and all
// person.salary()

// //looping through an object , we loop to save time of repeating ourselves
// let Laptop={  
//     make : 'dell',
//     cpu: '3GHZ',
//     ram :'16GB'
// }
// console.log(Laptop);
// for (const key in Laptop){
//     console.log(Laptop[key]);
// }
// //to display value too
// console.log(Laptop);
// for (const key in Laptop){
//     console.log(Laptop[key,'',Laptop[key]]);
// }

//this below(of) will give an error, we need to use for in , that deals with index which is also key or property
// console.log(Laptop);
// for (const key of Laptop){
//     console.log(Laptop[key]);
// }

//can also use object or foreach(cam) but for objects for in is cleaner and faster
// console.log(Object.keys(Laptop));
// console.log(Object.values(Laptop));

//cloning an object uspng (spread oo)
let car1={
    make: 'toyota',
    year: 2023
}
// let car2 =car1  //clones everything including reference number
// console.log("==car1==");
// console.log(car1);
// console.log("==car2==");
// console.log(car2);
// console.log("Change the value of car2");
// car2.year=2024
// console.log(car1,car2);
// to fix the problem above(cloning reference too) which means when you change anything in car 2 it changes 1 too ---spread operator,object.assign(),JSON.parse()

// let car2={...car1} //spread operator
// console.log(car1,car2);
// console.log("Change the value of car2")
// car2.year=2024
// console.log(car1,car2);

// //object.assign(datatype,source)
// let car3= Object.assign({},car1)
// console.log("===car3===");
// console.log(car3);

// //JSON.parse its like parseint   converts object to string and creates a new one
// console.log("JSON.parse");
// let car4= JSON.parse(JSON.stringify(car1))
// console.log(car4);

//map modifies array elements(cam)















// String method
let firstName = 'Joel'
console.log(firstName.split("").reverse().join(""));
console.log(firstName.charAt(1));
console.log(firstName.endsWith("l"));
console.log(firstName.includes("p"));
console.log(firstName.lastIndexOf("e"));
console.log(firstName.replace("l","t"));
console.log(firstName.repeat(5));
console.log(firstName.endsWith("n"));
console.log(firstName.split(''));
/*
Exercises on the below methods
- charAt()
- endsWith()
- includes()
- lastIndexOf()
- indexOf()
- replace()
- repeat()
- startWith()
- subString()
- trim()
- trimEnd()
- trimStart()
- slice()
- split()
*/

// let numbers = [2, 4, 11, 1]
// let a = 3
// let b = 2
// console.log(`Highest number: ${Math.max(...numbers)}`);
// console.log(`Lowest number: ${Math.min(...numbers)}`);
// // 3^2 = 3 * 3
// console.log(`pow(x,y): ${Math.pow(a, b)}`);
// console.dir(Math);
