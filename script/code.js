function getmarks(){
let marks= document.getElementById("input").value;
}
switch (marks){
    case (100):
        console.log("A+");

break;
    case (100>marks>=90):
        console.log("A");

break;
    case (90>marks>80):
        console.log("B+");

break;
    case (80>marks>70):
        console.log("Distinction");

break;
    case (70>marks>60):
        console.log("C+");

break;
    case (60>marks>50):
        console.log("Passed");

default:
    console.log("Failed")

}