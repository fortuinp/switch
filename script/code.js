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
// let car1={
//     make: 'toyota',
//     year: 2023
// }
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















// // String method
// let firstName = 'Joel'
// console.log(firstName.split("").reverse().join(""));
// console.log(firstName.charAt(1));
// console.log(firstName.endsWith("l"));
// console.log(firstName.includes("p"));
// console.log(firstName.lastIndexOf("e"));
// console.log(firstName.replace("l","t"));
// console.log(firstName.repeat(5));
// console.log(firstName.endsWith("n"));
// console.log(firstName.split(''));
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

//let numbers = [2, 4, 11, 1]
// let a = 3
// let b = 2
// console.log(`Highest number: ${Math.max(...numbers)}`);
// console.log(`Lowest number: ${Math.min(...numbers)}`);
// //3^2 = 3 * 3
// console.log(`pow(x,y): ${Math.pow(a, b)}`);
// console.dir(Math);


//===REVISION===
//===REVISION===
//===REVISION===
//===REVISION===

//1. reading an instruction properly ====> create an array that contain 6 elements but the first 2 must be a nummber
//make sure element posItion 4 is uppercase...position is index

// let data = [2,3,'a','b','C','d'];
// console.log(data);
// //create 2 objects, add them to an array,log the objects as wll
// let person1={
//     firstname :'thimna'
// }
// let person2={
//     firstname: 'vero'
// }

// let personDetails =[]
// personDetails.push(person1)
// personDetails.push(person2)
// console.log(personDetails);
// console.log(person1)
// console.log(person2)

// //2.we use if /switch statement when theres a *condition*...else if
// let firstname= 'zubair'
// let state= 'late'
// if (state=='present'){
//     console.log('present')}
//     else if(state=='late'){
//         console.log('late')
//     }
//     else {
//         console.log('absent')
//     }

//converting the above to switch
//case return boolean so our switch must be boolean.... != not equal to

// let firstname= 'zubair'
// let state= 'late'

// switch(true){
//     case state=='present':
//     console.log('present')
//     break;
    
//     case state !="":
//     console.log('late')
//     break;
//     case state !="":
//     console.log('late-> Final warning')
//     break;
//     default:
//     console.log('absent')
//     break;
// }


// //MATH method
// let numbers=[9,4,2,5,10]
// function highestno(args){
//   for (let number in args){
//     console.log(number);
//   }
// }
// highestno()


//23/11
//spread operator,rest parameter...notes

//Math methods

//PI is constant
//console.log(Math.PI);

//round to nearest integer
//Math.round(number)

//rounds up to the next integer
//Math.ceil(number)

//rounds down 
//Math.floor(number)
//returns integer number if decimal
//Math.trunc(number)
//both floor and trunc returns same value

//right shift
//3=0011
// >>2= removes 2 bites  from 3
//console.log(3>>2);

// //date
// //on constructor function we use new and capital letter
// let currentDate=new Date();
// console.log(currentDate);
// console.dir(currentDate);
// console.error('this an error')
// console.log(currentDate.getDate());
// //month starts counting from 0 so add 1 
// console.log(currentDate.getMonth()+1);
// //specify own date
// let anotherDate=new Date("2022-11-5")
// console.log(anotherDate);
// let anotherrDate=new Date("2022","11","5")
// console.log(anotherrDate);
// let thirdAttemp= new Date(2021,11,11)
// console.log(thirdAttemp);


// //STRING METHODS 
// let sentence='i love programming'
// console.log(sentence);

// function arrOfChars(sentence){
//   let characters=[]
//   for (let c of sentence){
//     characters.push(c)
//   }
//   return characters
// }

// console.log(arrOfChars(sentence));
// //can use space /words to split
// console.log(sentence.split(""));
// console.log(sentence.replace("love","hate"));



/*====operators====
-Arithmetic +,/,**(exponents),*,%(reminder),-,++,--
-Assignment =,+=,etc..
-Comparison >=,<=,!=,==,===
-Logical &&,||,!
-Type of : type and instanceof

*/
//promp returns a string
// let num1=prompt('enter num1')
// let num2=prompt('enter2')
// console.log(+num1+ +num2);

// //ternary operator
// let salary=50000
// let bonus=2000
// let performance=true

// console.log(performance ? salary+bonus : salary);

//builtin functions...on Joels book
//checks if its a number
//console.log(isFinite("8"));

//confirm is also boolean
//let isReady = confirm("Are you ready? ")
// if(isReady) {
//     console.log("Quiz time");
// }else {
//     console.log("Self-study");
// }
 
//recursive function--- a loop without a loop, function that calls its self we need if statement to make it stop
// let cnt=0
// function numbersUntilTen(limit){
// if (cnt < limit){
//   cnt++
//   console.log(cnt)
//  numbersUntilTen(limit);
// }
// }
// numbersUntilTen(10)

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
// let count=0
// let numbers=[1,2,3,4,5]
// //let limit=numbers.length
// function readnums(){
// if (count <= numbers.length-1){
//   console.log(numbers[count])
//   count++
//   readnums()
// }
// }
// readnums()

//LOOP
//for in displays indexes, for of displays elements
//let numbers= [9,6,11,34]
// for(let n of numbers){
//   console.log(n);
// }


//for each makes life easier
// numbers.forEach((number,i)=>{
//   console.log(number,i);
// })

// //why do we clone objects..for a backoup
// let num1=[3,6,9]
// //clone
// let num2=[...num1]

// //EMPTYING ARRAY
// //delete first array
// num1.length=0
// //reassign it to empty array
// num1=[]
// //
// num1.splice(0,num1.length)

// while(num1.length >0){
//   num1.pop()
// }
// //reduce takes 2 arguments, current element and next element .

// num1.reduce

// console.log(num1,num2);


// //Create a function that will take an array(of numbers) as a parameter. Then every time you call the function with the same array it will display the next element(number) in the array.
// let count=0
// let numbers=[1,2,3,4,5]
// function nextn(...arr){
// for (i=0;i<arr.length; i++){
//   console.log(arr[i]);
// }

// }
// nextn(...numbers)

// let base = 2
// let height=3
// console.log(areaOfTriangle);

// function calcArea(base,height){
//   let areaOfTriangle=(base*height)/2
//   console.log(areaOfTriangle);
// }
// calcArea(3,2)




// //let limit=numbers.length
// function readnums(...arr){
// if (count <= arr.length){
//   console.log(arr[count])
//   count++
//   // readnums()
// }
// }
// readnums(52,5,5,8,7,3)


// // //let limit=numbers.length
// // function readnums(){
// // if (count <= numbers.length-1){
// //   console.log(numbers[count])
// //   count++
// //   readnums()
// // }
// // }
// readnums()


// function agetodays(age){
//   let days=age*365
//   console.log(days);
// }
// agetodays(20)

//Create a function that will take in an array or rest parameter and then display the sum of numbers in the array. If an array does not contain any numbers, then display a message : "Provide only numbers"

let count=0
let numbers=[1,2,3,4,5]
function nextn(...arr){
for (i=0;i<arr.length; i++){
  console.log(arr[i]);
}

}
nextn(...numbers)
numbers.red