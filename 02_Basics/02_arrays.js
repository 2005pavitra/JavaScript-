const myHeroes = ["Mother", "Father", "Friends"]
const realHeroes = ["Virat", "Neeraj", "Pragg"]

// myHeroes.push(realHeroes)

// console.log(myHeroes);
// console.log(myHeroes[3][1]);

// const allHeros = myHeroes.concat(realHeroes)
// console.log(allHeros);

const all_new_heros = [...myHeroes, ...realHeroes]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Pavitra"))
console.log(Array.from("Pavitra"))
console.log(Array.from({name: "Pavitra"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));