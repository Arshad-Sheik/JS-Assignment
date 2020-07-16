var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
var string_doc = document.getElementById("test").innerHTML = fruits.toString();
console.log(string_doc);


var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
var a = document.getElementById("demo").innerHTML = fruits.join(" * ");
console.log(a);


var fruits = ["Banana", "Orange", "Apple", "Mango"];
x = fruits.pop();              // Removes the last element ("Mango") from fruits
document.getElementById("pop").innerHTML = fruits.pop();
console.log(x);


var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");       //  Adds a new element ("Kiwi") to fruits //  the value of x is 5
document.getElementById("push").innerHTML = fruits.push();
console.log(fruits.push())


var fruits = ["Banana", "Orange", "Apple", "Mango"];
var x = fruits.shift();    // the value of x is "Banana"
document.getElementById("shift").innerHTML = fruits.shift();
console.log(fruits.shift());


var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");    // Returns 5
document.getElementById("unshift").innerHTML = fruits.unshift();
console.log(fruits.unshift());


var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[0] = "Kiwi";        // Changes the first element of fruits to "Kiwi"
document.getElementById("change").innerHTMl = fruits[0] = "Kiwi";
console.log(fruits[0] = "Kiwi");


var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length] = "Kiwi";          // Appends "Kiwi" to fruits
document.getElementById("length").innerHTMl = fruits[fruits.length] = "Kiwi";
console.log(fruits[fruits.length] = "Kiwi");


var fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0];           // Changes the first element in fruits to undefined
document.getElementById("delete").innerHTMl = delete fruits[0];
console.log(delete fruits[0]);


var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
document.getElementById("splice").innerHTML = fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits.splice(2, 0, "Lemon", "Kiwi"));


var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1);        // Removes the first element of fruits
document.getElementById("remove").innerHTML = fruits.splice(0, 1);
console.log(fruits.splice(0, 1));


var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias", "Linus"];
var myChildren = myGirls.concat(myBoys);   // Concatenates (joins) myGirls and myBoys
document.getElementById('merge').innerHTML = myGirls.concat(myBoys);
console.log(myGirls.concat(myBoys));


var arr1 = ["Cecilie", "Lone"];
var arr2 = ["Emil", "Tobias", "Linus"];
var arr3 = ["Robin", "Morgan"];
var myChildren = arr1.concat(arr2, arr3);   // Concatenates arr1 with arr2 and arr3
document.getElementById('merge3').innerHTML = arr1.concat(arr2, arr3);
console.log(arr1.concat(arr2, arr3));


var arr1 = ["Emil", "Tobias", "Linus"];
var myChildren = arr1.concat("Peter"); 
document.getElementById('mergea').innerHTML = arr1.concat("Peter");
console.log(arr1.concat("Peter"));


var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1);
document.getElementById('slice').innerHTML = fruits.slice(1);
console.log(fruits.slice(1));


var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3);
document.getElementById('slicee').innerHTMl = fruits.slice(1, 3);
console.log(fruits.slice(1, 3));


var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("tostr").innerHTML = fruits.toString();
console.log(fruits.toString());


var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("stppp").innerHTML = fruits;
console.log(fruits);