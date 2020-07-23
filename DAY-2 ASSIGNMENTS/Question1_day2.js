var person = prompt("Hey! Please enter your Name: ");
console.log(person);
if (person != null){
    document.getElementById('welcome').innerHTML =
    "Hello " + person + "! Welcome to my page Buddy!!!";
}