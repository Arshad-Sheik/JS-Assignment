    var marks = prompt("Enter your marks here to get your grade : ");
    console.log(`Given input(marks) ${marks}`);

    // Else if ladder

    if(marks == null){
       window.alert("Please enter your valid marks ");
    }
    marks = Number(marks);
    if(marks >= 80){
        console.log(`Marks are ${marks} and grade is A`);
    }
    else if(marks >= 70){
        console.log(`Marks are ${marks} and grade is B`);
    }
    else if(marks >= 60){
        console.log(`Marks are ${marks} and grade is C`);
    }
    else if (marks >= 50){
        console.log(`Marks are ${marks} and grade is D`);
    }
    else if(marks >= 40){
        console.log(`Marks are ${marks} and grade is E`);
    }
    else if(marks >= 0){
        console.log(`Marks are ${marks} and grade is F`);
    }
    else{
        console .log(`Please enter a valid input(Marks)`)
    }

    // Switch case

    switch(true) {
        case (marks >= 80) :
        console.log(`Marks are ${marks} and grade is A`);
        break;
        case (marks >= 70) :
        console.log(`Marks are ${marks} and grade is B`);
        break;
        case (marks >= 60) :
        console.log(`Marks are ${marks} and grade is C`);
        break;
        case (marks >= 50) :
        console.log(`Marks are ${marks} and grade is D`)
        break;
        case (marks >= 40) :
        console.log(`Marks are ${marks} and grade is E`);
        break;
        case (marks >= 0) :
        console.log(`Marks are ${marks} and grade is F`);
        break;   
        default :
        console.log(`Please enter a valid input(Marks)`)
        break;
    }

    // Ternary
    
     marks >= 80 ? console.log(`Marks are ${marks} and grade is A`) : marks >= 70 ? console.log(`Marks are ${marks} and grade is B`) : marks >= 60 ? console.log(`Marks are ${marks} and grade is C`) : marks >= 50 ? console.log(`Marks are ${marks} and grade is D`) : marks >= 40 ? console.log(`Marks are ${marks} and grade is E`) : marks >= 0 ? console.log(`Marks are ${marks} and grade is F`): console.log(`Please enter a valid input(Marks)`);


 