// for

for(let i = 0; i <= 10; i++){
    const element = i;
    if(element == 5){
        // console.log("5 is reached!!");
    }
    // console.log(element);
}


for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loop value : ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner loop value ${j} and the inner loop ${i}`);
        // console.log(i + "*" + j + "=" + i*j);
        
    }
    
}

let myArray = ["Apple", "Mango", "Banana"]
// console.log(myArray.length);

for(let i =0; i<myArray.length; i++){
    // console.log(myArray[i]);
}

// break and continue

for(let i = 1; i <= 20; i++){
    if(i == 5){
        console.log("5 reached");
        break
    }
    console.log(`value of i is ${i}`);
}


for (let i =1 ; i<= 20; i++){
    if(i ==5){
        console.log(`5 reached`);
        continue
    }

    console.log(`value of i is ${i}`);
}
