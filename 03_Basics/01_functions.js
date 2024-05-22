// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }

// addTwoNumbers(4,2)
// addTwoNumbers(a,2)
// addTwoNumbers(4,"2")

function addTwoNumbers(num1, num2){
    // let result = num1 + num2
    // return result
    return num1 + num2
}

const result = addTwoNumbers(4,5)

// console.log(("Result: ", result));

function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Pavitra"));

// function calculateCartPrice(num1){
//     return num1;
// }

// console.log(calculateCartPrice(399,499,599));//returns only first value

function calculateCartPrice(...num1){
    return num1;
}

// console.log(calculateCartPrice(399,499,599));


const user = {
    username: "Pavitra",
    price: 299
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject}`)
}

// handObject(user)
handleObject({
    username:"Pavitra",
    price:500
})

const myNewArray = [299, 399, 499, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([299, 500, 490]));