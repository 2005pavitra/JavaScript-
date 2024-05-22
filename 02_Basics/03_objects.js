// singleton

// object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Pavitra",
    "full name": "Pavitra Pandey",
    [mySym]: "mykey1",
    age: 18,
    location: "Bhopal",
    email: "pavitrapandey@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"]
} 

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(typeof JsUser[mySym]);

// console.log(JsUser);

JsUser.email = "pavitra@gmail.com",
// Object.freeze(JsUser)
JsUser.email = "sagar@gmail.com"

// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());