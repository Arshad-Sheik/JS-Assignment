console.error('This is a simple error');
console.warn('This is a warning.');
console.clear();
console.time('abc');
let fun = function(){
    console.log('fun is running');
    }
    let fun2 = function(){
    console.log('fun2 is running..');
    }
    fun(); // calling fun();
    fun2(); // calling fun2();
    console.timeEnd('abc');
    console.table({'a':1, 'b':2});
    for(let i=0;i<5;i++){
        console.count(i);
        }
        console.group('simple');
        console.warn('warning!');
        console.error('error here');
        console.log('vivi vini vici');
        console.groupEnd('simple');
        console.log('new section');
        const spacing = '10px';
        const styles =
        `padding: ${spacing}; background-color: white; color: green; font-style:
        italic; border: 1px solid black; font-size: 2em;`;
        console.log('%cGeeks for Geeks', styles);
        console.log("Hello world!");
        console.assert(document.getElementById("demo"), "You have no element with ID 'demo'");
        console.log("Hello world!");
console.groupCollapsed();
console.log("Hello again, this time inside a collapsed group!");
console.info("Hello world!");
function myFunction() {
    myOtherFunction();
    }
    
    function myOtherFunction() {
    console.trace();
    }