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

let greeting =" Hello World ";
let newA = Array.from(greeting)
console.log(newA);
// console.log(newA.slice(1,6).concat(newA.slice(7,12)));
console.log(greeting.trim().split(""));
