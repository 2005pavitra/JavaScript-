// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "231"
tinderUser.name = "Pavitra"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "pav@gmail.com",
    fullname: {
        userFullName: {
            firstname: "Pavitra",
            lastname:"Pandey"
        }
    }
}

// console.log(regularUser.fullname.userFullName.firstname);
// console.log(regularUser.fullname?.userFullName.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {...obj1, ...obj2}
const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3);



// console.log(users[1].email)

// console.log(tinderUser)

// const users = [
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
// ]

// console.log(users[1].email)

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "JavaScript",
    price: "756",
    courseInstructor: "Pavitra"
}

// course.courseInstructor

const {courseInstructor:instructor} = course

console.log(instructor);


