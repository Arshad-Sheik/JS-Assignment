// Method 1

// let number;
// do{
//      number = Number(prompt("Enter the  number greater than 100"));
// }while(number <= 100 || number == null || number == " ")
// console.log(number);

// Method 2

var number;
while(number <= 100 || number == null || number == " "){
     number = Number(prompt("Enter the  number greater than 100"));
     number > 100 ? console.log(number) : " ";
}