for(i=1;i<=100;i++){

    // multiples of 3

    if(i % 3 == 0){
        console.log(i + "." + "fizz");
    }
    
    //multiples of 5

    if(i % 5 == 0){
        console.log(i + "." + "buzz");
    }

    //multiples of 3 and 5

    if(i % 3 == 0 && i % 5 == 0){
        console.log(i + "." + "fizzbuzz");
    }
}


 