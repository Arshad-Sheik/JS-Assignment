let limit = Number(prompt("Enter the number up to which you want to find the prime numbers"));

if(limit == 1){
    console.log("1(one) is neither prime nor composite");
}

for(i=2;i<=limit;i++)
{
    let count = 0;
    for(j=1;j<=i;j++)
    {   
        if(i%j == 0)
        {
            count += 1;
        }
    }
    if(count === 2)
    {
        console.log(i);
    }
}
