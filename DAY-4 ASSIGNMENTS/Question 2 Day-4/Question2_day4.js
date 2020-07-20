const student = {
    name : "Helsinki",
    age : 24,
    projects : {
        diceGame : "Two player dice game using JavaScript",
    }
}

// Destructure

const {name , age , projects , projects : {diceGame}} = student;
// console.log(name,age,projects,diceGame);
console.log(`name : ${name}`);
console.log(` age : ${age}`);
console.log(projects);
console.log(` diceGame : ${diceGame}`);
