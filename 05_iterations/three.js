// for of 

const arr = [1, 2, 3, 4, 5]

for(const num of arr) {
    // console.log(num);
}

const greetings = "Hello World"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

const map = new Map()
map.set ('IN', "India")
map.set('GER', "Germany")
map.set('PAK',"Pakistan" )

// console.log(map);

for(const [key, value] of map){
    // console.log(key, ':-', value);
}

const myObj = {
    stu1: "Pavitra",
    stu2: "Hardik",
    stu3: "Divyansh"
}

// for(const [key,, value] of myObj){
//     console.log(key, ":-", value);
// }


// for in
for(const key in myObj){
    // console.log(myObj[key]);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming){
    // console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('FR', "France")

// for (const key in map) {
//     console.log(key);
// }

const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (val){
    // console.log(val);
})

coding.forEach((item, index, arr) => {
    // console.log(item, index, arr);
})

function printMe(item){
    // console.log((item));
}

coding.forEach(printMe)

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )