let userinput = prompt("Mention/Choose  the Operation you want to perform in this virtual calculator page" + "\n" + "1.Addition" +"\n" + "2.Subtraction" + "\n" + "3.Multiplication" + "\n" + "4.Division" + "\n" + "5.Square root of a number" + "\n" + "6.Percentage" + "\n" + "Enter the S.no below to perform that specific operation");

switch(true) {
    case (userinput == 1) :
        let num1 = Number(prompt("Enter the first Number : "));
        let num2 = Number(prompt("Enter the second Number : "));
        if (num1 == NaN || num2 == NaN){
            console.log("Invalid Input");
        }
        result = num1 + num2;
        console.log(`Addition of ${num1} and ${num2} gives ${result}`);
        break;
    case (userinput == 2) :
        let num3 = Number(prompt("Enter the first Number : "));
        let num4 = Number(prompt("Enter the second Number : "));
        if (num3 == NaN || num4 == NaN){
            console.log("Invalid Input");
        }
        result = num3 - num4;
        console.log(`Subtraction of ${num3} and ${num4} gives ${result}`);
        break;
    case (userinput == 3) :
        let num5 = Number(prompt("Enter the first Number : "));
        let num6 = Number(prompt("Enter the second Number : "));
        if (num5 == NaN || num6 == NaN){
            console.log("Invalid Input");
        }
        result = num5 * num6;
        console.log(`Product of ${num5} and ${num6} gives ${result}`);
        break;
    case (userinput == 4) :
        let num7 = Number(prompt("Enter the first Number : "));
        let num8 = Number(prompt("Enter the second Number : "));
        if (num7 === NaN || num8 === NaN){
            console.log("Invalid Input");
        }
        result = num7 / num8;
        console.log(`Division of ${num7} by ${num8} gives ${result}`);
        break;
    case (userinput == 5) :
        let num9 = Number(prompt("Enter the Number : "));
        let sqrt = Math.sqrt(num9);
        console.log(`Square root of ${num9} is ${sqrt}`);
        break;
    case (userinput == 6) :
        let num10 = Number(prompt("Enter the Value you want to find the percentage of : "))
        let num11 = Number(prompt("Enter the Total Value from which you find the percentage of : "));
        let percentage = num10/num11 * 100;
        console.log(`Percentage : Its ${percentage} %`)
}
