// var c = 300
let a = 300
if(true){
    let a = 10
    const b = 20
    // var c = 30
    console.log("inner:", a) ;

}

// console.log(a);
// console.log(b);
// console.log(c);

if(true){
    const username = "Pavitra"
    if(username === "Pavitra"){
        const website = "youtube"
        console.log(username + website);
    }
    // console.log(website)
}

// console.log(username)

// ===========================interesting======================

// console.log(addone(5))

function addone(num){
    return num +1
}

addTwo()
const addTwo = function(num){
    return num + 2
}