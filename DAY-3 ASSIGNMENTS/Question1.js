function even_or_odd(){
    var response = prompt("Enter the number you want to verify whether it is Even or Odd");
    var num = Number(response)
    if(num % 2 == 0){
        return `The number entered is ${num} and Number is Even`;
    }
    else{
        return `The number entered is ${num} and Number is Odd`
    }
}
var result = even_or_odd();
console.log(result);
