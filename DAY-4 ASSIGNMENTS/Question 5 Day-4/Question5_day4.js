var sales = Number(prompt("Enter the total number of sales made by you this year"));

if(sales >= 0 && sales <= 5000){
    var total_commission = sales * 0.02;
    console.log(`Total Commission earned by you is ${total_commission}`);
}

if(sales >= 5001 && sales <= 10000){
    total_commission = (5000 * 0.02) + ((sales - 5000) * 0.05);
    console.log(`Total Commission earned by you is ${total_commission}`);
}

if(sales >= 10001 && sales <= 20000){
    total_commission = (5000 * 0.02) + (5000 * 0.05) + ((sales - 10000) * 0.07)
    console.log(`Total Commission earned by you is ${total_commission}`);
}

if(sales >= 20000){
    total_commission = (5000*0.02)+(5000*0.05)+(10000*0.07)+((sales-20000)*0.1);
    console.log(`Total Commission earned by you is ${total_commission}`);
}