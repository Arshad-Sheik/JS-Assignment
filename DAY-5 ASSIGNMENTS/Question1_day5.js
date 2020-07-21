let limit = Number(prompt("Enter the number of elements you want to include in the array :"));

var arr = [];
for(i=1;i<=limit;i++){
    arr.push(i);
}
console.log(`Original Array of numbers till the limit :`);
console.log(arr)

let odd = arr.filter(el => el%2 !=0);
let oddcubes = arr.filter(el => el%2 != 0).map(el => el**3);
console.log(`Array of odd numbers till the limit :`);
console.log(odd);
console.log(`Array of cubes of odd numbers till the limit :`);
console.log(oddcubes);