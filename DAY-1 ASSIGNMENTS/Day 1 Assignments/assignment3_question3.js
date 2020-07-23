function nodeSimplified(){
    var a =10;
    console.log(a); // output 10
    if(true){
    var a=20;
    console.log(a); // output 20
    }
    console.log(a); // output 20
    }
function nodeSimplified(){
        let a =10;
        console.log(a); // output 10
        if(true){
        let a=20;
        console.log(a); // output 20
        }
        console.log(a); // output 10
        }
function nodeSimplified(){
            let a =10;
            let a =20; //throws syntax error
            console.log(a);
            }
function nodeSimplified(){
                var a =10;
                var a =20;
                console.log(a); //output 20
                }
                const a =10;

function nodeSimplified(){
                const MY_VARIABLE =10;
                console.log(MY_VARIABLE); //output 10
                }
function nodeSimplified(){
                    const MY_VARIABLE =10;
                    console.log(MY_VARIABLE); //output 10
                    MY_VARIABLE =20; //throws type error
                    console.log(MY_VARIABLE);
                    }
                    
