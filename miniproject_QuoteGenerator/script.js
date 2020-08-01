async function quotes(){
    const quote = await fetch('https://type.fit/api/quotes')

    const data = await quote.json();
    
    let randomquotes = [];
    let authors = [];
     data.forEach((element) => {
        randomquotes.push(element.text);
        if(element.author == null){
            element.author = "no author";
        }
        authors.push(element.author);
    })
    console.log(randomquotes);
    console.log(authors);
    let index=Math.floor(Math.random()*randomquotes.length);
    // console.log(randomquotes[index],authors[index]);
    document.getElementById("quote").innerHTML = randomquotes[index];
    document.getElementById("author").innerHTML = ` ~ ${authors[index]}..`;
}


// Clock

const ctime = document.getElementById('time');
function clock() {
    let date = new Date();
    let time = date.toLocaleTimeString();

    ctime.innerText = time;
}

setInterval(clock,1000);




// Dark mode

function darkmode() {
    var element = document.body;
    element.classList.toggle("darkmode");
}