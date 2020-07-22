let name = prompt("Enter your name :","Anonymous");

document.getElementById('title').innerHTML= `Welcome to my web page ${name} 😊`


const ctime = document.getElementById('time');
function clock() {
    let date = new Date();
    let time = date.toLocaleTimeString();

    ctime.innerText = time;
}
// clock();
setInterval(clock,1000);

// Dark Mode

// const dmode = document.getElementById('dark');
// document.body.style.backgroundColor = 'white'
// dmode.onclick = function darkmode() {
//     var x = document.body;
//   if (x.style.backgroundColor == "white") {
//     x.style.backgroundColor = "black";
//     x.style.color = 'white'
//   } else {
//     x.style.backgroundColor = "white";
//     x.style.color = 'black'
//   }
// }

// Using the toggle method of classList to add a dark mode feature to the website.

function darkmode() {
    var element = document.body;
    element.classList.toggle("darkmode");
}