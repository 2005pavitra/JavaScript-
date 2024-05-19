// Stack(Primitive), Heap(Non-Primitive)

let myName = "Pavitra"

let anotherName = myName;

console.log(anotherName);

anotherName = "Pavitra Pandey"

let userOne = {
    email: "pavitrapandey@gmail.com",
    phone: 9384297392
}
let userTwo = userOne

userTwo.email = "pavitra@gmail.com";

console.log(userOne.email)
console.log(userTwo.email)