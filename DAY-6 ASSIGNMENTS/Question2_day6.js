function table() {
    let number;
    number = Number(document.getElementById('finput').value);
    document.getElementById('mtprint').innerHTML =`Multiplication table of number ${number} : <br/>`;
    console.log(`Multiplication table of number ${number} : `)
    for (i=1; i<=10;i++) {
    document.getElementById('mtprint').innerHTML += `${number} X ${i} = ${number*i}` + `<br/>`;
    console.log(`${number} X ${i} = ${number*i}`);
    }
}


const ctime = document.getElementById('time');
function clock() {
    let date = new Date();
    let time = date.toLocaleTimeString();

    ctime.innerText = time;
}

setInterval(clock,1000);