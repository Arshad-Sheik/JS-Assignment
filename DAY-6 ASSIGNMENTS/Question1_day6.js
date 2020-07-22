var color = ["plum", "yellow", "blue", "brown", "green","purple","wheat","orange","gold"];
let i = 0;
function change() {
        document.getElementById('background').style.backgroundColor = color[i];
        i++;

      if(i > color.length - 1) {
        i = 0;
    }
}
setInterval(change, 5000);


const ctime = document.getElementById('time');
function clock() {
    let date = new Date();
    let time = date.toLocaleTimeString();

    ctime.innerText = time;
}

setInterval(clock,1000);